import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OBTENER_COSTOS } from './apis/apis';
import { CostosResponsetInterface } from '../interface/costos.interfaces';
import { CookieService } from 'ngx-cookie-service';
import { apiUrlEnv } from 'env';

const apiUrl = apiUrlEnv

@Injectable({
  providedIn: 'root'
})
export class CostosService {

  constructor(private http: HttpClient,private cookieService: CookieService) { }

  obtenerCostos(){
    let token = this.cookieService.get('user_token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    })
    return this.http.get<CostosResponsetInterface[]>(apiUrl + OBTENER_COSTOS, {headers})
  }

}
