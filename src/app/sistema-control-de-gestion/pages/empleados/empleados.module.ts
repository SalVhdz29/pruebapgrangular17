import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimengModule } from '../../primeng/primeng.module';
import { SharedModule } from '../../shared_components/shared.module';
import { EmpleadosRoutingModule } from './empleados-routing.module';
import { EmpleadosComponent } from './components/empleados/empleados.component';
import { UpdateEmpleadoComponent } from './components/update-empleado/update-empleado.component';
import { CrearEmpleadoComponent } from './components/crear-empleado/crear-empleado.component';


@NgModule({
  declarations: [
    EmpleadosComponent,
    UpdateEmpleadoComponent,
    CrearEmpleadoComponent,
  ],
  imports: [
    CommonModule,
    EmpleadosRoutingModule,
    PrimengModule,
    SharedModule,
  ]
})
export class EmpleadosModule { }
