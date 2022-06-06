
import { createAction, props } from '@ngrx/store';
import { AuthResponse } from 'src/app/auth/interface/authResponse.interface';

 


export const loginRequest = createAction(
    '[Usuario Login] Login request',
    props<{correo:string,password : string}>()
)
export const LoginSuccess = createAction(
    '[Usuario Login] Login success',
    props<{loginSuccessResponse : AuthResponse}>()
)
export const Logout = createAction(
    '[Usuario Logout] Logout success'  
)