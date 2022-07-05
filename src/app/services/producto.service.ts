import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  Observable, of } from 'rxjs';
import { catchError,map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Usuario } from '../auth/interface/authResponse.interface';
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
    return this.http.get<Producto[]>(url).pipe(
      map(resp=>{
        const itemsArr : Producto[] = []
        resp.forEach(prod=>{
          if(prod.disponible){
            itemsArr.push(prod)
          }
        })
        return itemsArr
      })
    )
  }
  getProductosByCat(cat : string) : Observable<Producto[]>{
    const url : string = `${this.baseUrl}/productos/generos/HOMBRE`
    return this.http.get<Producto[]>(url).pipe(
      map(
        resp=>{
          const itemsArr : Producto[] = []  
          resp.forEach(prod =>{
            if(cat===prod.categoria.nombre && prod.disponible){
                itemsArr.push(prod)              
            }
          })
          return itemsArr
        }
        )
    )
  }
  getProductosByCatMujer(cat : string) : Observable<Producto[]>{
    const url : string = `${this.baseUrl}/productos/generos/MUJER`
    return this.http.get<Producto[]>(url).pipe(
      map(
        resp=>{
          const itemsArr : Producto[] = []  
          resp.forEach(prod =>{
            if(cat===prod.categoria.nombre && prod.disponible){
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
            if(talleProd == Number(talle) && prod.disponible){
                itemsArr.push(prod)
            }
          })
        })
        return itemsArr
      })
    )
  }
  getProductosByTalleMujer(talle:string) :Observable<Producto[]>{
    const url : string = `${this.baseUrl}/productos/generos/MUJER`
    return this.http.get<Producto[]>(url).pipe(
      map(resp=>{
        const itemsArr : Producto[] = []
        resp.forEach(prod=>{
          prod.talle.forEach(talleProd=>{
            if(talleProd == Number(talle) && prod.disponible){
                itemsArr.push(prod)
            }
          })
        })
        return itemsArr
      })
    )
  }
  getProductosFavoritos(idUsuario : string,token : string){
    const url : string = `${this.baseUrl}/favoritos/${idUsuario}`
    const headers = new HttpHeaders()
      .set('x-token',token)
    
    return this.http.get<any>(url,{headers}).pipe(
        map(({favorites})=>{  
          return favorites}))
  }
  addFavorite(idUsuario:string,token:string,idFavorite:string){
    const url : string = `${this.baseUrl}/favoritos/new/${idUsuario}`
    const headers = new HttpHeaders()
    .set('x-token',token)
    return this.http.post(url,{idFavorite},{headers})
  }

  deleteFavoriteById(idUsuario: string,token : string,idProducto : string){
    const url : string = `${this.baseUrl}/favoritos/delete/${idUsuario}`
    const options ={
      headers : new HttpHeaders()
        .set('x-token',token),
      body:{
        idFavorite:idProducto
      }
    }
    return this.http.delete<Usuario>(url,options)
  }
  updateProductById(productoWithNewStock : Producto,idProducto : string,token:string) {
    const url : string = `${this.baseUrl}/productos/${idProducto}`
    const headers = new HttpHeaders()
      .set('x-token',token)
    
    return this.http.put(url,productoWithNewStock,{headers})
  }
  buscarProducto(termino : string) : Observable<Producto[]>{
    const url : string = `${this.baseUrl}/buscar/productos/${termino}`
    return this.http.get<Producto[]>(url)
  }


} 
