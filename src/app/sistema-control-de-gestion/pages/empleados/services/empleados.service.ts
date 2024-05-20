import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { apiUrlEnv } from 'env';
import { Empleado, EmpleadoResponse, EmpleadosResponse } from '../interfaces/empleados';

const apiUrl = apiUrlEnv

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  constructor(private http: HttpClient) { }

  getEmpleados(){
    return this.http.get<EmpleadosResponse>(apiUrl +'/Empresa/IndexEmpleados');
  }

  getEmpleadoById(id:number){
    return this.http.get<EmpleadoResponse>(apiUrl+'/Empresa/GetEmpleadoById/'+id);
  }

  putEmpleado(id: number, fechaContrato: string, fechaFinContrato: string |null, idEmpresa: number){
    return this.http.put(apiUrl+'/Empresa/UpdateEmpleado/'+id,{fechaContrato, fechaFinContrato, idEmpresa});
  }

  postEmpleado(idPersona: number, fechaContrato: string, fechaFinContrato: string |null, idEmpresa: number){
    return this.http.post(apiUrl+'/Empresa/CreateEmpleado/',{idPersona,fechaContrato, fechaFinContrato, idEmpresa});
  }

  delEmpleado(id:number){
    return this.http.delete(apiUrl+'/Empresa/DeleteEmpleado/'+id);
  }

}
