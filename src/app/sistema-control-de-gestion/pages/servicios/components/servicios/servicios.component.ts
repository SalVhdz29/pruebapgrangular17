import { Component, OnInit, WritableSignal, signal } from '@angular/core';
import { ServiciosService } from '../../services/servicios.service';
import { DatoServicio } from '../../interfaces/servicios';
import { catchError, throwError } from 'rxjs';
import { Table } from 'primeng/table';
import { DatoProceso } from '../../../procesos/interface/proceso.interface';
import { ProcesosService } from '../../../procesos/service/procesos.service';

@Component({
    selector: 'app-servicios',
    templateUrl: './servicios.component.html',
    styleUrl: './servicios.component.scss',
})
export class ServiciosComponent implements OnInit {
    constructor(
        private serviciosServices: ServiciosService,
        private procesosService: ProcesosService
    ) {}

    serviciosList: WritableSignal<DatoServicio[]> = signal([]);
    showProceso: boolean = false;
    showServicioDialog: boolean = false;
    descripcionServicio!: string;
    ProcesoSeleccionado!: DatoProceso | null;
    ProcesoList: WritableSignal<DatoProceso[]> = signal([]);
    formularioCompleto: boolean = false;

    ngOnInit(): void {
        this.obtenerServicios();
        this.obtenerProcesos();
    }

    obtenerServicios() {
        this.showProceso = true;
        this.serviciosServices
            .getServicios()
            .pipe(
                catchError((error) => {
                    const status = error.status;

                    if (status == '400' || status == '404' || status == '500') {
                        console.log('EERROR');

                        // this.messageService.add({ severity: 'error', summary: 'Error al guardar la información', detail: 'Favor contactar al departamento correspondiente' });
                    }
                    //this.showLoader = false
                    this.showProceso = false;
                    return throwError(error.statusText);
                })
            )

            .subscribe((resp) => {
                this.showProceso = false;
                this.serviciosList.set(resp.respuesta!.datos);

                // setTimeout(()=>{
                //   this.showProceso = false;
                //   this.serviciosList.set(resp.respuesta!.datos);
                // },3000)
            });
    }

    obtenerProcesos() {
        this.procesosService
            .getProcesos()
            .pipe(
                catchError((error) => {
                    const status = error.status;

                    if (status == '400' || status == '404' || status == '500') {
                        console.log('EERROR');

                        // this.messageService.add({ severity: 'error', summary: 'Error al guardar la información', detail: 'Favor contactar al departamento correspondiente' });
                    }
                    //this.showLoader = false
                    return throwError(error.statusText);
                })
            )

            .subscribe((resp) => {
                console.log(resp);

                this.ProcesoList.set(resp.respuesta!.datos);
            });
    }

    setProceso(proceso: DatoProceso){
      this.ProcesoSeleccionado = proceso
      
    }

    clear(table: Table) {
        table.clear();
    }

    showDialog() {
        this.showServicioDialog = !this.showServicioDialog;
    }

    agregarServicio(){
      this.descripcionServicio = "";
      this.ProcesoSeleccionado;
      this.showDialog()
    }

    cancelarServicio(){
      this.descripcionServicio = "";
      this.ProcesoSeleccionado = null;
      this.showDialog()
    }
}
