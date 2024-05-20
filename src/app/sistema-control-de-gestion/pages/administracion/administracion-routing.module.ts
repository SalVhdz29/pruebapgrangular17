import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { RolesComponent } from './pages/roles/roles.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { AccesosComponent } from './pages/accesos/accesos.component';
export const routes: Routes = [
    {
        path: 'roles', component: RolesComponent
    },
    {
        path: 'usuarios', component: UsuariosComponent
    },
    {
        path: 'accesos', component: AccesosComponent
    },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class AdministracionRoutingModule{}