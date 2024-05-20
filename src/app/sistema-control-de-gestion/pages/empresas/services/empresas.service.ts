import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EmpresaResponse, EmpresasResponse } from '../interfaces/empresas';
import { apiUrlEnv } from 'env';

const apiUrl = apiUrlEnv

@Injectable({
  providedIn: 'root'
})
export class EmpresasService {

  constructor(private http: HttpClient) {}

  getEmpresas(){
    return this.http.get<EmpresasResponse>(apiUrl +'/Empresa/IndexEmpresas');
  }

  getEmpresaById(id:number){
    return this.http.get<EmpresaResponse>(apiUrl+'/Empresa/GetEmpresabyId/'+id);
  }

  putEmpresa(id:number, nombre:string, direccion:string, telefono:string){
    return this.http.put(apiUrl+'/Empresa/UpdateEmpresa/'+id,{
      nombre, direccion, telefono
    });
  }
  postEmpresa(nombre:string, direccion:string, telefono:string){
    return this.http.post(apiUrl+'/Empresa/CreateEmpresa',
      {nombre,direccion, telefono}
    );
  }

  delEmpresa(id:number){
    return this.http.delete(apiUrl+'/Empresa/DeleteEmpresa/'+id);
  }

}
