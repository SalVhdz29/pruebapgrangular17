import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InductoresRoutingModule } from './inductores-routing.module';
import { InductoresComponent } from './components/inductores/inductores.component';
import { EditarInductoresComponent } from './components/editar-inductores/editar-inductores.component';
import { EliminarInductoresComponent } from './components/eliminar-inductores/eliminar-inductores.component';
import { PrimengModule } from '../../primeng/primeng.module';
import { SharedModule } from '../../shared_components/shared.module';


@NgModule({
  declarations: [
    InductoresComponent,
    EditarInductoresComponent,
    EliminarInductoresComponent
  ],
  imports: [
    CommonModule,
    InductoresRoutingModule,
    PrimengModule,
    SharedModule
  ]
})
export class InductoresModule { }
