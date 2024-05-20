import { Component, OnInit, WritableSignal, signal } from '@angular/core';
import { ProcesosService } from '../service/procesos.service';
import { catchError, throwError } from 'rxjs';
import {
    DatoProceso,
    ProcesosResponseInterface,
    ProcesosResquestInterface,
} from '../interface/proceso.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Table } from 'primeng/table';

@Component({
    selector: 'procesos',
    templateUrl: './procesos.component.html',
    styleUrl: './procesos.component.scss',
})
export class ProcesosComponent implements OnInit {
    showProcesoDialog: boolean = false;

    ProcesoList: WritableSignal<DatoProceso[]> = signal([]);

    descripcionProceso!: string;
    codigoProceso!: string;
    tiempoMinutos!: string;
    formularioCompleto: boolean = false;

    showProceso: boolean = false;

    procesoForm!: FormGroup;

    constructor(
        private procesosService: ProcesosService,
        private fb: FormBuilder
    ) {}
    ngOnInit(): void {
        this.obtenerProcesos()

        
    }

    obtenerProcesos(){
        this.showProceso = true
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
                    this.showProceso = false
                    return throwError(error.statusText);
                })
            )

            .subscribe((resp) => {
                this.ProcesoList.set(resp.respuesta!.datos);
                this.showProceso = false
            });
    }

    clear(table: Table) {
        table.clear();
    }

    agregarProceso() {
        //TODO: Descripcion, codigo, tiempoMinutos
        this.showProceso = true;
        this.formularioCompleto = false;
        if (this.descripcionProceso != null && this.descripcionProceso != ''&&this.codigoProceso!=null&&this.codigoProceso!=undefined && this.codigoProceso!=''&&this.tiempoMinutos!=null&&this.tiempoMinutos!=undefined&&this.tiempoMinutos!='') {
            this.formularioCompleto = false;
            this.showProceso = true
            let nuevoProceso: ProcesosResquestInterface = {
                codigo: this.codigoProceso,
                descripcion: this.descripcionProceso,
                tiempoMinutos: parseFloat(this.tiempoMinutos)
            }

            this.procesosService.postProceso(nuevoProceso)
            .pipe(
                catchError((error) => {
                    const status = error.status;

                    if (status == '400' || status == '404' || status == '500') {
                        console.log('EERROR');

                        // this.messageService.add({ severity: 'error', summary: 'Error al guardar la información', detail: 'Favor contactar al departamento correspondiente' });
                    }
                    //this.showLoader = false
                    this.showProceso = false
                    return throwError(error.statusText);
                })
            )

            .subscribe((resp) => {
                this.obtenerProcesos()
                this.showProceso = false
                this.descripcionProceso = ""
                this.codigoProceso = ""
                this.tiempoMinutos = ""
                this.showProceso = false;
                this.showDialog()

            });
        } else {
            this.formularioCompleto = true;
        }
    }

    setCodigo(codigo:string){
        this.codigoProceso = codigo
    }

    setTiempo(tiempo: string)
    {
        this.tiempoMinutos = tiempo
    }

    showDialog() {
        this.showProcesoDialog = !this.showProcesoDialog;
    }
}
