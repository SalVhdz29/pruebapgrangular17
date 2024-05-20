import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndicadoresMainPageComponent } from './pages/indicadores-main-page/indicadores-main-page.component';
import { IndicadoresControlRoutingModule } from './indicadores-control-routing.module';
import { IndicadoresCombustibleComponent } from './pages/indicadores-combustible/indicadores-combustible.component';
import { PrimengModule } from '../../primeng/primeng.module';
import { DetalleIndicadoresCombustibleComponent } from './pages/indicadores-combustible/detalle-indicadores-combustible/detalle-indicadores-combustible/detalle-combustible.component';



@NgModule({
  declarations: [
    IndicadoresMainPageComponent,
    IndicadoresCombustibleComponent,
    DetalleIndicadoresCombustibleComponent
  ],
  imports: [
    CommonModule,
    IndicadoresControlRoutingModule,
    PrimengModule
  ]
})
export class IndicadoresControlModule { }
