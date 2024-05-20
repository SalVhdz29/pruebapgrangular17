import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CargarDatosComponent } from './pages/cargar-datos/cargar-datos.component';
export const routes: Routes = [
    {
        path: '', component: CargarDatosComponent
    },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class CargarDatosRoutingModule{}