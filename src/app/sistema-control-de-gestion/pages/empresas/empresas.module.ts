import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmpresasRoutingModule } from './empresas-routing.module';
import { EmpresasComponent } from './components/empresas/empresas.component';
import { PrimengModule } from '../../primeng/primeng.module';
import { SharedModule } from '../../shared_components/shared.module';
import { UpdateEmpresaComponent } from './components/update-empresa/update-empresa.component';
import { CreateEmpresaComponent } from './components/create-empresa/create-empresa.component';


@NgModule({
  declarations: [
    EmpresasComponent,
    UpdateEmpresaComponent,
    CreateEmpresaComponent,
  ],
  imports: [
    CommonModule,
    EmpresasRoutingModule,
    PrimengModule,
    SharedModule,
  ]
})
export class EmpresasModule { }
