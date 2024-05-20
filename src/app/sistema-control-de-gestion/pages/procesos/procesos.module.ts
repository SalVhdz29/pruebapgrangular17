import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimengModule } from '../../primeng/primeng.module';
import { ProcesosRoutingModule } from './procesos-routing.module';
import { ProcesosComponent } from './procesos/procesos.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditarProcesoComponent } from './components/editar-proceso/editar-proceso.component';
import { EliminarProcesoComponent } from './components/eliminar-proceso/eliminar-proceso.component';
import { SharedModule } from '../../shared_components/shared.module';



@NgModule({
  declarations: [
    ProcesosComponent,
    EditarProcesoComponent,
    EliminarProcesoComponent
  ],
  imports: [
    CommonModule,
    PrimengModule,
    ProcesosRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class ProcesosModule { }
