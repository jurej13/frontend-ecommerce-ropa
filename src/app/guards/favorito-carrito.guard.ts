import { Injectable } from '@angular/core';
import {  CanActivate, CanLoad,  Router,  UrlTree } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Producto } from '../interfaces/productos.interface';
import { AppState } from '../state/app.state';
import { SelectToken } from '../state/selectors/authLogin.selectors';
import { selectShopping } from '../state/selectors/shopping.selectors';

@Injectable({
  providedIn: 'root'
})
export class FavoritoCarritoGuard implements CanActivate, CanLoad {
  token !: string
  productosCart !: Producto[]
  constructor(private store : Store<AppState>,private route : Router){
    this.store.select(SelectToken).subscribe(resp => this.token = resp)
    this.store.select(selectShopping).subscribe(resp=> this.productosCart = resp)
  }
  canActivate(
    ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        
      if(this.token == '' || this.productosCart.length == 0){
        // anda a logearte , osea return false.
        this.route.navigate(['auth/login'])
        return false
      }
      return true;
  }
  canLoad(
    ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.token == '' && this.productosCart.length == 0){
        // anda a logearte , osea return false.
        this.route.navigate(['auth/login'])
        return false
      }
      return true;
  
  }
}
