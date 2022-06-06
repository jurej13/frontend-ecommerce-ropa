import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map,catchError,tap} from 'rxjs/operators';
import {Observable, of} from 'rxjs'
import { environment } from 'src/environments/environment';
import {  AuthResponse } from '../interface/authResponse.interface';
import { MessageService } from 'primeng/api';

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
         return this._usuario = resp
      }),
      catchError(err=> {
        this.messageService.add({severity:'error', summary: 'Error', detail: err.error.msg})
        return of(null)
      })
    )
      
    
     
      
  }

}
