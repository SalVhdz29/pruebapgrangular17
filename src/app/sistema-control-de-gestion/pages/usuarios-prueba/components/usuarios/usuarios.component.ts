import { Component, OnInit, WritableSignal, effect, signal } from '@angular/core';
import { UsuariosService } from '../../services/usuarios.service';
import { catchError, throwError } from 'rxjs';
import { Table } from 'primeng/table';
import { Users, UsuarioT, User } from '../../interfaces/usuarios';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.scss'
})
export class UsuariosComponent implements OnInit {
    loadingFlg:boolean = false;
    listaUsuarios: WritableSignal<Users> = signal([]);
    usuarioListTbl: UsuarioT[] = [];
    showCreateDialog: boolean = false;
    usuarioChoose!: User | null;
    showUpdateDialog: WritableSignal<boolean> = signal(false);

    constructor(
        private usuariosServices: UsuariosService,
    ){
        effect(()=>{
            const listUsuarios = this.listaUsuarios();
            const n_list:UsuarioT[]=[];
            listUsuarios.map(({id, name, email, phone, username}:User)=>{
                n_list.push({
                    id,
                    nombre: name.firstname + " " + name.lastname,
                    email,
                    phone,
                    username
                });
            });

            this.usuarioListTbl = n_list;
        })
    }

    async ngOnInit(){
        this.obtenerUsuarios();
    }

    obtenerUsuarios(){
        this.showUpdateDialog.set(false);
        this.usuarioChoose=null;
        this.usuariosServices
            .getUsuarios()
            .pipe(
                catchError((error) => {
                    const status = error.status;

                    if (status == '400' || status == '404' || status == '500') {
                        // this.messageService.add({ severity: 'error', summary: 'Error al guardar la información', detail: 'Favor contactar al departamento correspondiente' });
                    }

                    this.loadingFlg = false;
                    return throwError(error.statusText);
                })
            )
            .subscribe((response)=>{
                this.listaUsuarios.set(response);
            });
    }

    setUserSelected(usuario:User){
        this.usuarioChoose = usuario;
        this.showUpdateDialog.set(true);
    }


    clear(table: Table) {
        table.clear();
    }
}
