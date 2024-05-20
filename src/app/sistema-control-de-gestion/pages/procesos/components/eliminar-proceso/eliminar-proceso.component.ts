import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProcesosService } from '../../service/procesos.service';
import { catchError, throwError } from 'rxjs';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'eliminar-proceso',
  templateUrl: './eliminar-proceso.component.html',
  styleUrl: './eliminar-proceso.component.scss',
  providers: [ConfirmationService, MessageService]
})
export class EliminarProcesoComponent {
  showProcesoDialog: boolean = false;
  constructor(private procesosService: ProcesosService, private confirmationService: ConfirmationService, private messageService: MessageService) {}
  showProceso: boolean = false;
  @Input()
    idProceso!: number;

    @Output() actualizarPadre = new EventEmitter();

  obtenerProcesos(){}

  confirm() {
    this.confirmationService.confirm({
        header: 'Eliminar proceso',
        message: '¿Desea eliminar el proceso?',
        acceptIcon: 'pi pi-check mr-2',
        rejectIcon: 'pi pi-times mr-2',
        rejectButtonStyleClass: 'p-button-danger p-button-sm ',
        acceptLabel: "Si",
        rejectLabel: "No",
        acceptButtonStyleClass: 'p-button-success p-button-sm ',
        accept: () => {
          this.eliminarProceso()
            
        },
        reject: () => {
            this.messageService.add({ severity: 'error', summary: 'Operación cancelada', detail: 'No se ha eliminado el proceso', life: 3000 });
        }
    });
}

  eliminarProceso(){
    this.showProceso = true;
    this.procesosService
            .deleteProceso(this.idProceso)
            .pipe(
                catchError((error) => {
                    const status = error.status;

                    if (status == '400' || status == '404' || status == '500') {
                        console.log('EERROR');

                        this.messageService.add({ severity: 'error', summary: 'Error al eliminar el proceso', detail: 'Favor contactar al departamento correspondiente' });
                    }
                    //this.showLoader = false
                    this.showProceso = false;
                    return throwError(error.statusText);
                })
            )

            .subscribe((resp) => {
                
                this.messageService.add({ severity: 'success', summary: 'Proceso eliminado', detail: 'Proceso eliminado correctamente', life: 3000 });
                this.showProceso = false;

                setTimeout(()=>{
                  this.showProcesoDialog = true;
                  this.actualizarPadre.emit()
                },3000)

                
            });
  }

}
