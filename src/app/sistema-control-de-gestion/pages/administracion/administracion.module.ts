import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministracionRoutingModule } from './administracion-routing.module';
import { PrimengModule } from '../../primeng/primeng.module';
import { AccesosComponent } from './pages/accesos/accesos.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { RolesComponent } from './pages/roles/roles.component';



@NgModule({
  declarations: [
    AccesosComponent,
    UsuariosComponent, RolesComponent
  ],
  imports: [
    CommonModule,
    AdministracionRoutingModule,
    PrimengModule
  ]
})
export class AdministracionModule { }
