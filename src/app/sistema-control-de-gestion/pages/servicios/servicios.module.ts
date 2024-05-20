import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiciosRoutingModule } from './servicios-routing.module';
import { SharedModule } from '../../shared_components/shared.module';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { PrimengModule } from '../../primeng/primeng.module';


@NgModule({
  declarations: [
    ServiciosComponent
  ],
  imports: [
    CommonModule,
    ServiciosRoutingModule,
    SharedModule,
    PrimengModule
  ]
})
export class ServiciosModule { }
