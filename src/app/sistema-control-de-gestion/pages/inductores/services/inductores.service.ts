import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { OBTENER_INDUCTORES } from '../apis/inductores.api';
import { InductorDato, InductorRequestInterface, InductorResponseInterface, InductoresResponseInterface } from '../interfaces/inductores';
import { apiUrlEnv } from 'env';

const apiUrl = apiUrlEnv

@Injectable({
  providedIn: 'root'
})
export class InductoresService {

  constructor(private http: HttpClient, private cookieService: CookieService) { }


  getInductores(){
    let token = this.cookieService.get('user_token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    })
    return this.http.get<InductoresResponseInterface>(apiUrl + OBTENER_INDUCTORES, {headers})
  }

  getInductor(idInductor: number){
    let token = this.cookieService.get('user_token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    })
    return this.http.get<InductorResponseInterface>(apiUrl + OBTENER_INDUCTORES + idInductor, {headers})
  }

  postInductor(inductor: InductorRequestInterface){
    let token = this.cookieService.get('user_token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    })
    return this.http.post<InductoresResponseInterface>(apiUrl + OBTENER_INDUCTORES, inductor ,{headers})
  }

  updateInductor(inductor: InductorDato){
    let token = this.cookieService.get('user_token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    })
    return this.http.put<InductoresResponseInterface>(apiUrl + OBTENER_INDUCTORES, inductor ,{headers})
  }

  deleteInductor(idInductor:number)
  {
    let inductor = {
      "id":idInductor
    }

    let token = this.cookieService.get('user_token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    })
    return this.http.delete<InductoresResponseInterface>(apiUrl + OBTENER_INDUCTORES,{body: inductor,headers})
  }

}
