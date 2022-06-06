import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {  exhaustMap, map,tap } from 'rxjs/operators';
import { AuthService } from 'src/app/auth/services/auth.service';
import { LoginSuccess } from '../actions/authLogin.actions';


 
@Injectable()
export class AuthLoginEffectts {

    constructor(
        private actions$: Actions,
        private authService: AuthService,
        private router : Router
      ) {}
  loginRequest$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[Usuario Login] Login request'),
      exhaustMap(action =>
        this.authService.login(action).pipe(
          map(loginSuccessResponse => LoginSuccess({ loginSuccessResponse })),
        )
      )
    )
  ); 
  loginSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[Usuario Login] Login success'),
      tap(()=>{
        this.router.navigateByUrl('/')
      })
    ),
    {dispatch:false}
  );
  Logout$ = createEffect(()=>
    this.actions$.pipe(
      ofType('[Usuario Logout] Logout success'),
      tap(()=>{
        this.router.navigateByUrl('/')
      })
    ),
    {dispatch:false}
  ) 

  
}