import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../state/app.state';
import { SelectToken } from '../state/selectors/authLogin.selectors';

@Injectable({
  providedIn: 'root'
})
export class FavoritoGuard implements CanActivate, CanLoad {
  token !: string
  constructor(private store : Store<AppState>,private router : Router){
    this.store.select(SelectToken).subscribe(resp=> this.token = resp)
  }
  canActivate(
    ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.token == '' ){
        // anda a logearte , osea return false.
        this.router.navigate(['auth/login'])
        return false
      }
      return true;
  }
  canLoad(
    ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.token == ''){
        // anda a logearte , osea return false.
        this.router.navigate(['auth/login'])
        return false
      }
      return true;
  }
}
