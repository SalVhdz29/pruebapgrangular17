import { Component } from '@angular/core';
import { CatalogoInterface } from '../../../interfaces-generales/interfaces-generales.interfaces';
import { AdministracionService } from '../../services/administracion.service';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.scss'
})
export class RolesComponent {

  showRolDialog: boolean = false;

  //Variables para crear roles
  nombreRolIngresado: string | null = null;
  fechaCreacion: Date = new Date();
  estadoRolIngresado: boolean = false


  rolesList: CatalogoInterface[] = []

  formularioCompleto: boolean = false;

  constructor(private administracionServices: AdministracionService){}

  ngOnInit(): void {
    this.rolesList = this.administracionServices.listaRoles()
  }

  agregarRol(){
    if(this.nombreRolIngresado!=null&&this.nombreRolIngresado!='')
    {
      this.formularioCompleto = false

      let roles_list: CatalogoInterface[] = [...this.rolesList]

      let rol: CatalogoInterface = {
        estado: this.estadoRolIngresado,
        descripcion: this.nombreRolIngresado!,
        codigo: this.rolesList.length + 1
      }

      roles_list.push(rol)


      this.rolesList = roles_list

      this.administracionServices.listaRoles.set(this.rolesList)

      this.limpiarInputs()
      this.showDialog()

    }
    else{
      this.formularioCompleto = true
    }
  }

  limpiarInputs(){
    this.nombreRolIngresado = null
    this.fechaCreacion = new Date()
    this.estadoRolIngresado = false
  }

  showDialog(){
    if(this.showRolDialog)
    {
      this.formularioCompleto = true
      this.limpiarInputs()
      this.showRolDialog = false
    }
    else{
      this.formularioCompleto = false
      this.showRolDialog = true
    }
  }

}
