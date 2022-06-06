import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map,catchError,tap} from 'rxjs/operators';
import {Observable, of} from 'rxjs'
import { environment } from 'src/environments/environment';
import {  AuthResponse, Usuario } from '../interface/authResponse.interface';
import { MessageService } from 'primeng/api';
import { authRegister } from '../interface/authRegister.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _usuario !: AuthResponse
  private baseUrl : string = environment.baseUrl
  
  constructor(private http :  HttpClient,
    private messageService : MessageService  
    ) { }
  get usuario(){
    return {...this._usuario}
  }


  login(correo : string , password : string): Observable<AuthResponse | null >{
    const url =`${this.baseUrl}/auth/login`
    
    return this.http.post<AuthResponse>(url,{correo,password}).pipe(
      map(resp=>{
        localStorage.setItem('token',resp.token)
        return this._usuario = resp
      }),
      catchError(err=> {
        this.messageService.add({severity:'error', summary: 'Error', detail: err.error.msg})
        return of(null)
      })
    )  
  }
  register(usuarioRegister : authRegister) : Observable<Usuario | null>{
    const url = `${this.baseUrl}/usuarios`
    return this.http.post<Usuario>(url,usuarioRegister)
      .pipe(
        catchError(err =>{
          this.messageService.add({severity:'error', summary: 'Error', detail: err.error.errors[0].msg})
          return of(null)
        })
      )
    
  }

  logout(){
    
    this._usuario.token=''
    this._usuario.usuario={
      nombre: '',
      correo: '',
      rol:    '',
      estado: true,
      uid:    '',
    }
    localStorage.clear()
  }
}
