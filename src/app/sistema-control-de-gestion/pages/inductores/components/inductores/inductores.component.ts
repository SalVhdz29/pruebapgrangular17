import { Component, OnInit, WritableSignal, signal } from '@angular/core';
import { InductoresService } from '../../services/inductores.service';

import { catchError, throwError } from 'rxjs';
import { Table } from 'primeng/table';
import { Datos, InductorDato } from '../../interfaces/inductores';

@Component({
    selector: 'app-inductores',
    templateUrl: './inductores.component.html',
    styleUrl: './inductores.component.scss',
})
export class InductoresComponent implements OnInit {
    showInductoresDialog: boolean = false;
    descripcionInductor!: string;
    formularioCompleto: boolean = false;
    inductoresList: Datos[] = [];
    showProceso: boolean = false;

    constructor(
        private inductoresServices: InductoresService,
    ) {}
    async ngOnInit() {
        this.obtenerInductores();
    }

    showDialog() {
        this.showInductoresDialog = !this.showInductoresDialog;
    }
    obtenerInductores() {
        this.showProceso = true;
        this.inductoresServices
            .getInductores()
            .pipe(
                catchError((error) => {
                    const status = error.status;

                    if (status == '400' || status == '404' || status == '500') {
                        // this.messageService.add({ severity: 'error', summary: 'Error al guardar la información', detail: 'Favor contactar al departamento correspondiente' });
                    }
                    //this.showLoader = false
                    this.showProceso = false;
                    return throwError(error.statusText);
                })
            )

            .subscribe((resp) => {
                this.showProceso = false;
                this.inductoresList = resp.respuesta!.datos;
            });
    }

    agregarInductor() {
        this.showProceso = true;
        this.formularioCompleto = false;
        if (
            this.descripcionInductor != null &&
            this.descripcionInductor != '' 
        ) {
            this.formularioCompleto = false;

            let nuevoInductor: InductorDato = {
                descripcion: this.descripcionInductor,
                idActividad: 1!
            };

            this.inductoresServices
                .postInductor(nuevoInductor)
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
                    this.obtenerInductores();
                    this.showProceso = false;
                    this.descripcionInductor = '';
                    this.showDialog();
                });
        } else {
            this.formularioCompleto = true;
        }
    }

    clear(table: Table) {
        table.clear();
    }
}
