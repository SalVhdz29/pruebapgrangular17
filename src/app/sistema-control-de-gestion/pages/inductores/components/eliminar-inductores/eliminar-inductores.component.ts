import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { InductoresService } from '../../services/inductores.service';
import { catchError, throwError } from 'rxjs';

@Component({
  selector: 'eliminar-inductores',
  templateUrl: './eliminar-inductores.component.html',
  styleUrl: './eliminar-inductores.component.scss',
  providers: [ConfirmationService, MessageService]
})
export class EliminarInductoresComponent {

  showInductoresDialog: boolean = false;

  constructor(private inductoresServices:InductoresService, private confirmationService: ConfirmationService, private messageService: MessageService){}

  @Input()
    idInductor!: number;

    @Output() actualizarPadre = new EventEmitter();

    confirm() {
      this.confirmationService.confirm({
          header: 'Eliminar inductor',
          message: '¿Desea eliminar el inductor?',
          acceptIcon: 'pi pi-check mr-2',
          rejectIcon: 'pi pi-times mr-2',
          rejectButtonStyleClass: 'p-button-danger p-button-sm ',
          acceptLabel: "Si",
          rejectLabel: "No",
          acceptButtonStyleClass: 'p-button-success p-button-sm ',
          accept: () => {
            this.eliminarInductor()
              
          },
          reject: () => {
              this.messageService.add({ severity: 'error', summary: 'Operación cancelada', detail: 'No se ha eliminado el inductor', life: 3000 });
          }
      });
  }
  
    eliminarInductor(){
      this.inductoresServices
              .deleteInductor(this.idInductor)
              .pipe(
                  catchError((error) => {
                      const status = error.status;
  
                      if (status == '400' || status == '404' || status == '500' || status == '401') {
                          this.messageService.add({ severity: 'error', summary: 'Error al procesar la información', detail: 'Favor contactar al departamento correspondiente' });
                      }
                      return throwError(error.statusText);
                  })
              )
  
              .subscribe((resp) => {
                  console.log(resp);
                  
                  this.messageService.add({ severity: 'success', summary: 'Inductor eliminado', detail: 'Inductor eliminado correctamente', life: 3000 });
                  
  
                  setTimeout(()=>{
                    this.showDialog();
                    this.actualizarPadre.emit()
                  },3000)
  
                  
              });
    }

    showDialog(){
      this.showInductoresDialog = !this.showInductoresDialog
    }

}
