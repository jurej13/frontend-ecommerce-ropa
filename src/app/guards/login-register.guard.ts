import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../state/app.state';
import { SelectToken } from '../state/selectors/authLogin.selectors';

@Injectable({
  providedIn: 'root'
})
export class LoginRegisterGuard implements CanActivate {
  $jwtToken !: string
  constructor(private store : Store<AppState>,private router : Router){
    this.store.select(SelectToken).subscribe(resp=> this.$jwtToken = resp)
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.$jwtToken){
      this.router.navigate(['/'])
      return false
    }
    
      return true;
  }
  
}
