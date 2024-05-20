import {
    Component, Input,
    Output,WritableSignal,
    signal, effect,
    EventEmitter } from '@angular/core';
import { User } from '../../interfaces/usuarios';
import { UsuariosService } from '../../services/usuarios.service';
import { catchError, throwError } from 'rxjs';


@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrl: './update-user.component.scss'
})
export class UpdateUserComponent {

    @Output() actualizarPadre = new EventEmitter();
    @Input()
    usuario!: User | null;
    @Input()
    showDialog: WritableSignal<boolean> = signal(false)

    // showDialog: WritableSignal<boolean> = signal(false);
    categoryList: WritableSignal<string[]> =signal([]);
    categoryChoose: WritableSignal<string|null> = signal(null);
    nombre: string = '';
    apellido: string = '';
    email: string = '';
    username: string = '';
    telefono: string = '';
    disableEmail: boolean = false;




    constructor( private usuariosService: UsuariosService){

        effect(()=>{
            const bandera = this.showDialog();
            if(bandera){
                this.usuariosService
                    .getCategorias()
                    .pipe(
                        catchError((error) => {
                            const status = error.status;

                            if (status == '400' || status == '404' || status == '500') {
                                // this.messageService.add({ severity: 'error', summary: 'Error al guardar la información', detail: 'Favor contactar al departamento correspondiente' });
                            }

                            return throwError(error.statusText);
                        })
                    ).subscribe(response=>{
                        this.categoryList.set(response);
                    })
                }
            })

        effect(()=>{
            const category = this.categoryChoose();
            if(category != null && category == "electronics"){
                this.disableEmail=true;
            }else if(category != null){
                this.disableEmail=false;
            }
        })
    }

    agregarUsuario(){

    }

    

}
