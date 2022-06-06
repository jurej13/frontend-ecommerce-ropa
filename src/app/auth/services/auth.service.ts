import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map,catchError,tap} from 'rxjs/operators';
import {Observable, of} from 'rxjs'
import { environment } from 'src/environments/environment';
import {  AuthResponse, Usuario } from '../interface/authResponse.interface';
import { MessageService } from 'primeng/api';
import { authRegister } from '../interface/authRegister.interface';
import { FormGroup } from '@angular/forms';

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


  login(user : FormGroup): Observable<AuthResponse>{
    const url =`${this.baseUrl}/auth/login`
    
    return this.http.post<AuthResponse>(url,user)
  }
  register(usuarioRegister : authRegister) : Observable<Usuario>{
    const url = `${this.baseUrl}/usuarios`
    return this.http.post<Usuario>(url,usuarioRegister)
  }
  logout(){
    localStorage.clear()
  }
}
