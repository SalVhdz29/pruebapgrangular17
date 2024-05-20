import { OnInit } from '@angular/core';
import { Component } from '@angular/core';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];
    userRoutes: any [] = []
    ngOnInit() {

        this.userRoutes = [
            {
                label: 'Configuraciones',
                icon: 'pi pi-box',
                items: [
                    // {
                    //     label: 'Procesos',
                    //     icon: 'pi pi-box',
                    //     routerLink: ['/procesos/main']
                    // },
                    // {
                    //     label: 'Actividades del proceso',
                    //     icon: 'pi pi-box',
                    //     routerLink: ['/actividades/main']
                    // },
                    // {
                    //     label: 'Inductores',
                    //     icon: 'pi pi-users',
                    //     routerLink: ['/inductores/main']
                    // },
                    // {
                    //     label: 'Servicios',
                    //     icon: 'pi pi-briefcase',
                    //     routerLink: ['/servicios/main']
                    // },
                    {
                        label: 'prueba',
                        icon: 'pi pi-briefcase',
                        routerLink: ['/prueba/main']
                    },
                    //,{
                    //     label: 'Facturación',
                    //     icon: 'pi pi-briefcase',
                    //     routerLink: ['/facturacion/main']
                    // },{
                    //     label: 'Usuarios',
                    //     icon: 'pi pi-briefcase',
                    //     routerLink: ['/usuarios/main']
                    // },
                    {
                        label: 'Empresas',
                        icon: 'pi pi-briefcase',
                        routerLink: ['/empresas/main']
                    },
                    {
                        label: 'Personas',
                        icon: 'pi pi-briefcase',
                        routerLink: ['/personas/main']
                    },
                    {
                        label: 'Empleados',
                        icon: 'pi pi-briefcase',
                        routerLink: ['/empleados/main']
                    }
                ]
            },
        ]
    }
}
