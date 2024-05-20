import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosPruebaRoutingModule } from './usuarios-prueba-routing.module';
import { PrimengModule } from '../../primeng/primeng.module';
import { SharedModule } from '../../shared_components/shared.module';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { UpdateUserComponent } from './components/update-user/update-user.component';

@NgModule({
  declarations: [
    UsuariosComponent,
    UpdateUserComponent,
  ],
  imports: [
    CommonModule,
    UsuariosPruebaRoutingModule,
    PrimengModule,
    SharedModule,
  ]
})
export class UsuariosPruebaModule { }
