import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimengModule } from '../../primeng/primeng.module';
import { CostosRoutingModule } from './costos-routing.module';
import { CostosComponent } from './components/costos/costos.component';
import { MapaPrincipalComponent } from '../mapa-principal/components/mapa-principal/mapa-principal.component';
import { MapaPrincipalModule } from '../mapa-principal/mapa-principal.module';



@NgModule({
  declarations: [
    CostosComponent
  ],
  imports: [
    CommonModule,
    PrimengModule,
    CostosRoutingModule,
    MapaPrincipalModule
  ]
})
export class CostosModule { }
