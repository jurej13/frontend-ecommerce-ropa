import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Producto } from '../interfaces/productos.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private baseUrl = environment.baseUrl
  constructor(private http : HttpClient) { }


  getProductos() : Observable<Producto[]>{
    const url : string = `${this.baseUrl}/productos` 
    return this.http.get<Producto[]>(url).pipe(
      catchError(err=> of(err))
      )
  }
  getProductoById(id : string) : Observable<Producto>{
    const url : string = `${this.baseUrl}/productos/${id}`
    return this.http.get<Producto>(url).pipe(
      catchError(err => of(err))
    )
  }
} 
