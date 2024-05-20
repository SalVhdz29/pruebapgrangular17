import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CostosComponent } from './components/costos/costos.component';
export const routes: Routes = [
    {
        path: '', component: CostosComponent
    },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CostosRoutingModule { }