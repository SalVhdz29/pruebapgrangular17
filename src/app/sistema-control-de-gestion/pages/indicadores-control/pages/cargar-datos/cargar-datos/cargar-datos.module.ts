import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CargarDatosRoutingModule } from './cargar-datos-routing.module';
import { PrimengModule } from 'src/app/sistema-control-de-gestion/primeng/primeng.module';
import { CargarDatosComponent } from './pages/cargar-datos/cargar-datos.component';



@NgModule({
  declarations: [CargarDatosComponent],
  imports: [
    CommonModule,
    CargarDatosRoutingModule,
    PrimengModule
  ]
})
export class CargarDatosModule { }
