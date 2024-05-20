import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { IndicadoresMainPageComponent } from './pages/indicadores-main-page/indicadores-main-page.component';
import { IndicadoresCombustibleComponent } from './pages/indicadores-combustible/indicadores-combustible.component';
import { DetalleIndicadoresCombustibleComponent } from './pages/indicadores-combustible/detalle-indicadores-combustible/detalle-indicadores-combustible/detalle-combustible.component';

export const routes: Routes = [
    {
        path: '', component: IndicadoresMainPageComponent
    },
    {
        path: 'combustible', component: IndicadoresCombustibleComponent,
    },
    {
        path: 'combustible-detalle', component: DetalleIndicadoresCombustibleComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class IndicadoresControlRoutingModule { }
