import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapaPrincipalRoutingModule } from './mapa-principal-routing.module';
import { PrimengModule } from '../../primeng/primeng.module';
import { PaginaPrincipaComponent } from './pages/pagina-principa/pagina-principa.component';
import { MapaPrincipalComponent } from './components/mapa-principal/mapa-principal.component';



@NgModule({
  declarations: [
    PaginaPrincipaComponent,
    MapaPrincipalComponent
  ],
  imports: [
    CommonModule,
    MapaPrincipalRoutingModule,
    PrimengModule
  ],
  exports:[
    MapaPrincipalComponent
  ]
})
export class MapaPrincipalModule { }
