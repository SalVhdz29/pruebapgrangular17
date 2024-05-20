import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InductoresComponent } from './components/inductores/inductores.component';

const routes: Routes = [
  {
    path: '', component: InductoresComponent
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InductoresRoutingModule { }
