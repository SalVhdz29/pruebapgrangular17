import { Component } from '@angular/core';
import { CatalogoInterface } from '../../../interfaces-generales/interfaces-generales.interfaces';
import { AdministracionService } from '../../services/administracion.service';
import { usuarioInterface } from '../../interfaces/administracion.interfaces';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.scss'
})
export class UsuariosComponent {

  showUsuarioDialog: boolean = false;


  //Variables para crear usuarios

  nombreUsuarioIngresado: string | null = null;
  fechaCreacion: Date = new Date();
  estadoSeleccionado: boolean | null = null;
  rolSeleccionado: CatalogoInterface | null = null;

  usuariosList: usuarioInterface[] = [];
  rolesList: CatalogoInterface[] = []
  formularioCompleto: boolean = false;

  constructor(private administracionServices: AdministracionService){}

  ngOnInit(): void {
    this.usuariosList = this.administracionServices.listaUsuarios()

    let lista_roles: CatalogoInterface[] = [];
    
    for(let i of this.administracionServices.listaRoles())
    {
      if(i.estado)
      {
        lista_roles.push(i)
      }
    }

    this.rolesList = lista_roles
  }

  setRol(e: CatalogoInterface){
    this.rolSeleccionado = e
  }

  agregarUsuario(){
    if(this.nombreUsuarioIngresado!=null&&this.nombreUsuarioIngresado!=''&&this.rolSeleccionado!=null)
    {
      this.formularioCompleto = false

      let usuarios_list: usuarioInterface[] = [...this.usuariosList]

      let usuario: usuarioInterface = {
        estado: true,
        nombreUsuario: this.nombreUsuarioIngresado!,
        fechaCreacion: this.fechaCreacion,
        rol: this.rolSeleccionado!
      }

      usuarios_list.push(usuario)


      this.usuariosList = usuarios_list

      this.administracionServices.listaUsuarios.set(this.usuariosList)

      this.limpiarInputs()
      this.showDialog()

    }
    else{
      this.formularioCompleto = true
    }
  }

  limpiarInputs(){
    this.nombreUsuarioIngresado = null
    this.fechaCreacion = new Date()
    this.estadoSeleccionado = null
    this.rolSeleccionado = null
  }

  showDialog(){
    if(this.showUsuarioDialog)
    {
      this.formularioCompleto = true
      this.limpiarInputs()
      this.showUsuarioDialog = false
    }
    else{
      this.formularioCompleto = false
      this.showUsuarioDialog = true
    }
  }

}
