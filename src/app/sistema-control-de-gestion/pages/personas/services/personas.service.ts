import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { apiUrlEnv } from 'env';
import { Persona, Personas } from '../interfaces/personas';

const apiUrl = apiUrlEnv

@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  constructor(private http: HttpClient) { }

  getPersonas(){
    return this.http.get<Personas>(apiUrl +'/Persona/IndexPersonas');
  }

  getPersonaById(id:number){
    return this.http.get<Persona>(apiUrl+'/Persona/GetPersonaById/'+id);
  }

  putPersona(id:number, nombre:string, apellido:string, ocupacion:string, fecha_nacimiento: string){
    return this.http.put(apiUrl+'/Persona/UpdatePersona/'+id,{
      nombre, apellido, ocupacion, fechaNacimiento: fecha_nacimiento
    });
  }

  postPersona(nombre:string, apellido:string, ocupacion:string, fecha_nacimiento: string){
    return this.http.post(apiUrl+'/Persona/CreatePersona/',{
      nombre, apellido, ocupacion, fechaNacimiento: fecha_nacimiento
    });
  }

  delPersona(id:number){
    return this.http.delete(apiUrl+'/Persona/DeletePersona/'+id);
  }


}
