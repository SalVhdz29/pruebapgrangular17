import { Component, WritableSignal, signal } from '@angular/core';
import { Router } from '@angular/router';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { MessageService } from 'primeng/api';
import { LoginService } from './service/login.service';
import { catchError, throwError } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styles: [
        `
            i {
                opacity: 0.6;
                transition-duration: 0.12s;
                color: #2196f3;

                &:hover {
                    opacity: 1;
                }
            }
        `,
    ],
    providers: [MessageService],
})
export class LoginComponent {
    correoUsuario: string | null = null;
    contraseniaUsuario: string | null = null;
    userToken: WritableSignal<string | null> = signal(null);

    constructor(
        private layoutService: LayoutService,
        private router: Router,
        private messageService: MessageService,
        private loginService: LoginService,
        private cookieService: CookieService
    ) {}

    iniciarSesion() {
        // if (this.contraseniaUsuario != null && this.correoUsuario != null) {
        //     this.loginService
        //         .userLogin(this.correoUsuario!, this.contraseniaUsuario!)
        //         .pipe(
        //             catchError((error) => {
        //                 const status = error.status;

        //                 if (
        //                     status == '400' ||
        //                     status == '404' ||
        //                     status == '500'
        //                 ) {
        //                     console.log('EERROR');

        //                     // this.messageService.add({ severity: 'error', summary: 'Error al guardar la información', detail: 'Favor contactar al departamento correspondiente' });
        //                 }
        //                 //this.showLoader = false
        //                 return throwError(error.statusText);
        //             })
        //         )

        //         .subscribe((resp) => {
        //             console.log(resp);

        //             this.userToken.set(resp.body?.llave!)

        //             this.cookieService.set('user_token', resp.body!.llave);

        //             this.router.navigate(['/prueba/main'])
        //             // localStorage.setItem('token', resp.token)
        //             return true;
        //         });
        // }
        // else{
        //     console.log("ERROR");
        // }
        this.router.navigate(['/prueba/main'])
        //this.router.navigate(['/control-gestion/costos']);
        // if(this.contraseniaUsuario!=null&&this.contraseniaUsuario!=""&&this.correoUsuario!=null&&this.correoUsuario!="")
        // {
        //     this.router.navigate(['/sistema-control']);
        // }
        // else{
        //     this.messageService.add({ severity: 'error', summary: 'Credenciales invalidas', detail: 'Favor validar las credenciales ingresadas' });
        // }
    }

    setCorreo(correo:string){
        this.correoUsuario = correo
    }

    setContrasenia(contrasenia: string){
        this.contraseniaUsuario = contrasenia
    }
}
