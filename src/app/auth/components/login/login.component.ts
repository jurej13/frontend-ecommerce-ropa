import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { MessageService } from 'primeng/api';
import { delay } from 'rxjs';
import { loginRequest } from 'src/app/state/actions/authLogin.actions';
import { AuthResponse } from '../../interface/authResponse.interface';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  miFormulario : FormGroup = this.fb.group({
    correo : ['test1@hotmail.com',[Validators.required,Validators.email]],
    password : ['123456',[Validators.required,Validators.minLength(6)]]
  })
  constructor(private fb : FormBuilder,
    private store : Store
    ) { }

  ngOnInit(): void {
  }
  mostrar(){
    console.log(this.miFormulario.value)
    this.store.dispatch(loginRequest(this.miFormulario.value))
    // this.authService.login(this.miFormulario.get('email')?.value,this.miFormulario.get('password')?.value)
    //   .subscribe(resp=> {
    //       if(resp){
    //         this.messageService.add({severity:'success', summary: 'Success', detail: 'Login Succesful'});
    //         setTimeout(()=>this.router.navigate(['/home']),2000)   
    //       }
    //   })
  }
  
  tieneError(campo : string): boolean{
    return this.miFormulario.get(campo)?.invalid  
      && this.miFormulario.get(campo)?.touched
       || false
  }

}
