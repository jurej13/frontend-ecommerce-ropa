import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { MessageService } from 'primeng/api';
import {  exhaustMap, map,tap } from 'rxjs/operators';
import { AuthService } from 'src/app/auth/services/auth.service';
import { LoginSuccess } from '../actions/authLogin.actions';


 
@Injectable()
export class AuthLoginEffectts {

    constructor(
        private actions$: Actions,
        private authService: AuthService,
        private router : Router,
        private messageService : MessageService
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
        this.messageService.add({severity:'success', summary: 'Success', detail: 'Login Succesful'});
        setTimeout(()=>this.router.navigateByUrl('/home') ,800)
      })
    ),
    {dispatch:false}
  );
  Logout$ = createEffect(()=>
    this.actions$.pipe(
      ofType('[Usuario Logout] Logout success'),
      tap(()=>{
        this.router.navigateByUrl('/auth')
      })
    ),
    {dispatch:false}
  ) 

  
}