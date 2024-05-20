import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Producto } from '../interfaces/facturacion';

@Injectable({
  providedIn: 'root'
})
export class FacturacionService {

  constructor(private http: HttpClient, private cookieService: CookieService) {}

  getCategorias(){
    return this.http.get<string[]>('https://fakestoreapi.com/products/categories');
  }

  getProductos(){
    return this.http.get<Producto[]>('https://fakestoreapi.com/products');
  }

}
