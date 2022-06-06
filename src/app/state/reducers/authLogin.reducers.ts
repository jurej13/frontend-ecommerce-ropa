import { createReducer, on } from '@ngrx/store';
import { LoginAuth } from 'src/app/interfaces/state-interface/loginAuth.state';

import {  LoginSuccess, Logout } from '../actions/authLogin.actions';




// Primero declarar un estado inicial.
export const initialState: LoginAuth= {
  token : '',
  usuario :{
    nombre : '',correo:'',uid:'',estado:true,rol:''
  }
}

export const loginReducer = createReducer(
  initialState,
  on(LoginSuccess, (state,{loginSuccessResponse}) => {
      return {
        ...state,
        token : loginSuccessResponse.token,
        usuario : loginSuccessResponse.usuario
      }
  }),
  on(Logout,(state)=>{
    return{
      ...state,
      token : '',
      usuario :{
        nombre : '',correo:'',uid:'',estado:true,rol:''
      }
    }
  })
  
);