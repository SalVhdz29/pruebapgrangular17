import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FacturacionRoutingModule } from './facturacion-routing.module';
import { PrimengModule } from '../../primeng/primeng.module';
import { SharedModule } from '../../shared_components/shared.module';
import { FacturacionComponent } from './components/facturacion/facturacion.component';


@NgModule({
  declarations: [
    FacturacionComponent,
  ],
  imports: [
    CommonModule,
    FacturacionRoutingModule,
    PrimengModule,
    SharedModule,
  ]
})
export class FacturacionModule { }
