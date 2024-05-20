import { Component, EventEmitter, Input, Output, WritableSignal, signal } from '@angular/core';
import { ProcesosService } from '../../service/procesos.service';
import {
    DatoProceso,
    ProcesosResquestInterface,
} from '../../interface/proceso.interface';
import { catchError, throwError } from 'rxjs';

@Component({
    selector: 'editar-proceso',
    templateUrl: './editar-proceso.component.html',
    styleUrl: './editar-proceso.component.scss',
})
export class EditarProcesoComponent {
    showProcesoDialog: boolean = false;
    
    Proceso: WritableSignal<DatoProceso | null> = signal(null);

    descripcionProceso!: string;
    codigoProceso!: string;
    tiempoMinutos!: string;
    formularioCompleto: boolean = false;
    showProceso: boolean = false;

    @Input()
    idProceso!: number;

    @Output() actualizarPadre = new EventEmitter();

    constructor(private procesosService: ProcesosService) {}
    ngOnInit(): void {}

    obtenerProcesos() {
        this.showProceso = true;
        this.procesosService
            .getProceso(this.idProceso)
            .pipe(
                catchError((error) => {
                    const status = error.status;

                    if (status == '400' || status == '404' || status == '500') {
                        console.log('EERROR');

                        //this.messageService.add({ severity: 'error', summary: 'Error al guardar la información', detail: 'Favor contactar al departamento correspondiente' });
                    }
                    //this.showLoader = false
                    this.showProceso = false;
                    return throwError(error.statusText);
                })
            )

            .subscribe((resp) => {
                this.descripcionProceso =
                    resp.respuesta.datos.descripcion != null
                        ? resp.respuesta.datos.descripcion
                        : '';
                this.codigoProceso =
                    resp.respuesta.datos.codigo != null
                        ? resp.respuesta.datos.codigo
                        : '';
                this.tiempoMinutos = resp.respuesta.datos.tiempoMinutos
                    ? resp.respuesta.datos.tiempoMinutos.toString()
                    : '0';
                    this.showProceso = false;
                this.showProcesoDialog = true;
            });
    }

    actualizarProceso() {
        //TODO: Descripcion, codigo, tiempoMinutos
        this.showProceso = true;
        this.formularioCompleto = false;
        if (
            this.descripcionProceso != null &&
            this.descripcionProceso != '' &&
            this.codigoProceso != null &&
            this.codigoProceso != undefined && this.codigoProceso != "" &&
            this.tiempoMinutos != ""
        ) {
            this.formularioCompleto = false;

            let nuevoProceso: ProcesosResquestInterface = {
                id: this.idProceso,
                codigo: this.codigoProceso,
                descripcion: this.descripcionProceso,
                tiempoMinutos: parseFloat(this.tiempoMinutos),
            };

            this.procesosService
                .updateProceso(nuevoProceso)
                .pipe(
                    catchError((error) => {
                        const status = error.status;

                        if (
                            status == '400' ||
                            status == '404' ||
                            status == '500'
                        ) {
                            console.log('EERROR');

                            // this.messageService.add({ severity: 'error', summary: 'Error al guardar la información', detail: 'Favor contactar al departamento correspondiente' });
                        }
                        //this.showLoader = false
                        this.showProceso = false;
                        return throwError(error.statusText);
                    })
                )

                .subscribe((resp) => {
                    this.descripcionProceso = '';
                    this.codigoProceso = '';
                    this.tiempoMinutos = '';
                    this.showProceso = false;
                    this.showProcesoDialog = false;
                    this.actualizarPadre.emit()
                });
        } else {
            this.formularioCompleto = true;
        }
    }

    setCodigo(codigo: string) {
        this.codigoProceso = codigo;
    }

    setTiempo(tiempo: string) {
        this.tiempoMinutos = tiempo;
    }

    showDialog() {
        this.showProcesoDialog = !this.showProcesoDialog;
    }
}
