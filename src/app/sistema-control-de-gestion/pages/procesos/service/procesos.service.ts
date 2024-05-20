import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProcesoResponsetInterface, ProcesosResponseInterface, ProcesosResquestInterface } from '../interface/proceso.interface';
import { OBTENER_PROCESOS } from '../apis/apis-procesos';
import { CookieService } from 'ngx-cookie-service';
import { apiUrlEnv } from 'env';

const apiUrl = apiUrlEnv

@Injectable({
  providedIn: 'root'
})
export class ProcesosService {

  constructor(private http: HttpClient, private cookieService: CookieService) { }


  getProcesos(){
    let token = this.cookieService.get('user_token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    })
    return this.http.get<ProcesosResponseInterface>(apiUrl + OBTENER_PROCESOS, {headers})
  }

  getProceso(idProceso: number){
    let token = this.cookieService.get('user_token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    })
    return this.http.get<ProcesoResponsetInterface>(apiUrl + OBTENER_PROCESOS + idProceso, {headers})
  }

  postProceso(proceso: ProcesosResquestInterface){
    let token = this.cookieService.get('user_token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    })
    return this.http.post<ProcesosResponseInterface>(apiUrl + OBTENER_PROCESOS, proceso ,{headers})
  }

  updateProceso(proceso: ProcesosResquestInterface){
    let token = this.cookieService.get('user_token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    })
    return this.http.put<ProcesosResponseInterface>(apiUrl + OBTENER_PROCESOS, proceso ,{headers})
  }

  deleteProceso(idProceso:number)
  {
    let proceso = {
      "id":idProceso
    }

    let token = this.cookieService.get('user_token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    })
    return this.http.delete<ProcesosResponseInterface>(apiUrl + OBTENER_PROCESOS,{body: proceso,headers})
  }

}
