import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, WritableSignal, signal } from '@angular/core';
import { Router } from '@angular/router';
import { LoginRequestInterface, LoginResponseInterface } from '../interface/login.interface';
import { catchError, throwError } from 'rxjs';
import { apiUrlEnv } from 'env';

const apiUrl = apiUrlEnv

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public userToken: WritableSignal<string | null> = signal(null)
	public userNameEmail: WritableSignal<string | null> = signal(null)
	public userPassword: WritableSignal<string | null> = signal(null)



  constructor(private http: HttpClient, private router: Router) { }

  userLogin(user: string, password: string) {


    let userLogin: LoginRequestInterface = {
      contra: password!,
      usuario: user!
    }

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    })

    // const headers = new HttpHeaders({
    //   'Content-Type': 'application/json',
    //   'Authorization': `Bearer ` + this.userInfo.userToken()
    // })


		return this.http.post<LoginResponseInterface>(apiUrl + 'gestioncostos/iniciarSesion/', userLogin, { observe: 'response'})
	}


}
