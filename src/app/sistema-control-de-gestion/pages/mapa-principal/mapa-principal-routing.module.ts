import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { PaginaPrincipaComponent } from './pages/pagina-principa/pagina-principa.component';

export const routes: Routes = [
    {
        path: '', component: PaginaPrincipaComponent
    },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MapaPrincipalRoutingModule { }