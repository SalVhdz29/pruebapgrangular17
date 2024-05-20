import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Users } from '../interfaces/usuarios';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor( private http: HttpClient) { }

  getUsuarios(){
    return this.http.get<Users>('https://fakestoreapi.com/users');
  }

  getCategorias(){
    return this.http.get<string[]>('https://fakestoreapi.com/products/categories');
  }

}
