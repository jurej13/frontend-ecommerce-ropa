import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { delay } from 'rxjs';
import { AuthResponse } from '../../interface/authResponse.interface';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  miFormulario : FormGroup = this.fb.group({
    email : ['test1@hotmail.com',[Validators.required,Validators.email]],
    password : ['123456',[Validators.required,Validators.minLength(6)]]
  })
  constructor(private fb : FormBuilder,
    private authService : AuthService,
    private router : Router,
    private messageService : MessageService
    ) { }

  ngOnInit(): void {
  }
  mostrar(){
    this.authService.login(this.miFormulario.get('email')?.value,this.miFormulario.get('password')?.value)
      .subscribe(resp=> {
          if(resp){
            this.messageService.add({severity:'success', summary: 'Success', detail: 'Login Succesful'});
            setTimeout(()=>this.router.navigate(['/home']),2000)
  
              
          }
      })
  }
  
  tieneError(campo : string): boolean{
    return this.miFormulario.get(campo)?.invalid  
      && this.miFormulario.get(campo)?.touched
       || false
  }

}
