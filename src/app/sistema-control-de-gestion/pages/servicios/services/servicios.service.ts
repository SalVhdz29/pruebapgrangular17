import { Injectable } from '@angular/core';
import { apiUrlEnv } from 'env';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { OBTENER_SERVICIOS } from '../apis/servicios';
import { ServiciosResponseInterface } from '../interfaces/servicios';
const apiUrl = apiUrlEnv

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  constructor(private http: HttpClient, private cookieService: CookieService) { }

  getServicios(){
    let token = this.cookieService.get('user_token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    })
    return this.http.get<ServiciosResponseInterface>(apiUrl + OBTENER_SERVICIOS, {headers})
  }

}
