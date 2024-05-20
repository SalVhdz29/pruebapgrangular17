import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { AppLayoutComponent } from './layout/app.layout.component';
import { CargarDatosModule } from './sistema-control-de-gestion/pages/indicadores-control/pages/cargar-datos/cargar-datos/cargar-datos.module';

const routerOptions: ExtraOptions = {
    anchorScrolling: 'enabled'
};

const routes: Routes = [
    {
        //ruta principal
        path: '',
        redirectTo: 'auth/login',
        pathMatch: 'full',
    },
    {
        path: 'control-gestion', component: AppLayoutComponent,
        children: [
            //{path: 'main', loadChildren:()=>import('../app/sistema-control-de-gestion/pages/mapa-principal/mapa-principal.module').then(m=>m.MapaPrincipalModule)},
            {path: 'indicadores', loadChildren:()=>import('../app/sistema-control-de-gestion/pages/indicadores-control/indicadores-control.module').then(m=>m.IndicadoresControlModule)},
            {path: 'cargar-datos', loadChildren:()=>import('../app/sistema-control-de-gestion/pages/indicadores-control/pages/cargar-datos/cargar-datos/cargar-datos.module').then(m=>m.CargarDatosModule)},
            {path: 'administracion', loadChildren:()=>import('../app/sistema-control-de-gestion/pages/administracion/administracion.module').then(m=>m.AdministracionModule)},
            //{path: 'costos', loadChildren:()=>import('../app/sistema-control-de-gestion/pages/costos/costos.module').then(m=>m.CostosModule)}
        ]
    },
    {
        path: 'procesos', component: AppLayoutComponent,
        children: [
            {path: 'main', loadChildren:()=>import('../app/sistema-control-de-gestion/pages/procesos/procesos.module').then(m=>m.ProcesosModule)},

        ]
    },
    {
        path: 'inductores', component: AppLayoutComponent,
        children: [
            {path: 'main', loadChildren:()=>import('../app/sistema-control-de-gestion/pages/inductores/inductores.module').then(m=>m.InductoresModule)},

        ]
    },
    {
        path: 'servicios', component: AppLayoutComponent,
        children: [
            {path: 'main', loadChildren:()=>import('../app/sistema-control-de-gestion/pages/servicios/servicios.module').then(m=>m.ServiciosModule)},

        ]
    },
    {
        path: 'prueba', component: AppLayoutComponent,
        children: [
            {path: 'main', loadChildren:()=>import('../app/sistema-control-de-gestion/pages/prueba/prueba.module').then(m=>m.PruebaModule)},

        ]
    },
    {
        path: 'facturacion', component: AppLayoutComponent,
        children: [
            {path: 'main', loadChildren:()=>import('../app/sistema-control-de-gestion/pages/facturacion/facturacion.module').then(m=>m.FacturacionModule)},

        ]
    },
    {
        path: 'usuarios', component: AppLayoutComponent,
        children: [
            {path: 'main', loadChildren:()=>import('../app/sistema-control-de-gestion/pages/usuarios-prueba/usuarios-prueba.module').then(m=>m.UsuariosPruebaModule)},

        ]
    },
    {
        path: 'empresas', component: AppLayoutComponent,
        children: [
            {path: 'main', loadChildren:()=>import('../app/sistema-control-de-gestion/pages/empresas/empresas.module').then(m=>m.EmpresasModule)},

        ]
    },
    {
        path: 'personas', component: AppLayoutComponent,
        children: [
            {path: 'main', loadChildren:()=>import('../app/sistema-control-de-gestion/pages/personas/personas.module').then(m=>m.PersonasModule)},

        ]
    },
    {
        path: 'empleados', component: AppLayoutComponent,
        children: [
            {path: 'main', loadChildren:()=>import('../app/sistema-control-de-gestion/pages/empleados/empleados.module').then(m=>m.EmpleadosModule)},

        ]
    },
    { path: 'auth', data: { breadcrumb: 'Auth' }, loadChildren: () => import('./demo/components/auth/auth.module').then(m => m.AuthModule) },
    // { path: 'landing', loadChildren: () => import('./demo/components/landing/landing.module').then(m => m.LandingModule) },
    { path: 'notfound', loadChildren: () => import('./demo/components/notfound/notfound.module').then(m => m.NotfoundModule) },
    { path: '**', redirectTo: '/notfound' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
