import {
    Component,
    EventEmitter,
    Input,
    Output,
    WritableSignal,
    signal,
} from '@angular/core';
import { InductoresService } from '../../services/inductores.service';
import { catchError, throwError } from 'rxjs';
import { InductorDato } from '../../interfaces/inductores';

@Component({
    selector: 'editar-inductores',
    templateUrl: './editar-inductores.component.html',
    styleUrl: './editar-inductores.component.scss',
})
export class EditarInductoresComponent {
    @Input()
    idInductor!: number;

    @Output() actualizarPadre = new EventEmitter();

    showInductoresDialog: boolean = false;
    descripcionInductor!: string;
    formularioCompleto: boolean = false;

    constructor(
        private inductoresServices: InductoresService,
    ) {}
    ngOnInit(): void {
    }

    showDialog() {
        this.obtenerInductor();
        this.showInductoresDialog = !this.showInductoresDialog;
    }

    obtenerInductor() {
        this.inductoresServices
            .getInductor(this.idInductor)
            .pipe(
                catchError((error) => {
                    const status = error.status;

                    if (status == '400' || status == '404' || status == '500') {
                        // this.messageService.add({ severity: 'error', summary: 'Error al guardar la información', detail: 'Favor contactar al departamento correspondiente' });
                    }
                    //this.showLoader = false
                    return throwError(error.statusText);
                })
            )

            .subscribe((resp) => {
                console.log("ACA ", resp);

                this.descripcionInductor = resp.respuesta.datos.descripcion;
            });
    }


    actualizarInductor() {
        this.formularioCompleto = false;
        if (
            this.descripcionInductor != null &&
            this.descripcionInductor != ''
        ) {
            this.formularioCompleto = false;

            let inductor: InductorDato = {
                id: this.idInductor,
                descripcion: this.descripcionInductor,
                idActividad: 1!,
            };

            this.inductoresServices
                .updateInductor(inductor)
                .pipe(
                    catchError((error) => {
                        const status = error.status;

                        if (
                            status == '400' ||
                            status == '404' ||
                            status == '500'
                        ) {
                            // this.messageService.add({ severity: 'error', summary: 'Error al guardar la información', detail: 'Favor contactar al departamento correspondiente' });
                        }
                        //this.showLoader = false
                        return throwError(error.statusText);
                    })
                )

                .subscribe((resp) => {
                    console.log(resp);

                    this.descripcionInductor = '';
                    this.showDialog()
                    this.actualizarPadre.emit()
                });
        } else {
            this.formularioCompleto = true;
        }
    }
}
