import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  Observable, of } from 'rxjs';
import { catchError,map,switchMap,tap } from 'rxjs/operators';
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
  getProductByGender(gender : string): Observable<Producto[]>{
    const url : string = `${this.baseUrl}/productos/generos/${gender}`
    return this.http.get<Producto[]>(url)
  }
  getProductosByCat(cat : string) : Observable<Producto[]>{
    const url : string = `${this.baseUrl}/productos/generos/HOMBRE`
    return this.http.get<Producto[]>(url).pipe(
      map(
        resp=>{
          const itemsArr : Producto[] = []  
          resp.forEach(prod =>{
            if(cat===prod.categoria.nombre){
              itemsArr.push(prod)
            }
          })
          return itemsArr
        }
        )
    )
  }
  getProductosByTalle(talle:string) :Observable<Producto[]>{
    const url : string = `${this.baseUrl}/productos/generos/HOMBRE`
    
    return this.http.get<Producto[]>(url).pipe(
      map(resp=>{
        const itemsArr : Producto[] = []
        resp.forEach(prod=>{
          prod.talle.forEach(talleProd=>{
            if(talleProd == Number(talle)){
              itemsArr.push(prod)
              
            }
          })
        })
        return itemsArr
      })
    )
  }
  getProductosFavoritos(id : string,token : string){
    const url : string = `${this.baseUrl}/favoritos/${id}`
    const headers = new HttpHeaders()
      .set('x-token',token)
    
    return this.http.get<any>(url,{headers}).pipe(
        map(({favorites})=>{
          
          return favorites})
    )
  }


} 
