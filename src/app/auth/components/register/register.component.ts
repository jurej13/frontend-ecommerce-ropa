import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { authRegister } from '../../interface/authRegister.interface';
import { AuthService } from '../../services/auth.service';
import { ValidatorAuthService } from '../../services/validator-auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  usuarioRegister !: authRegister
  miFormulario : FormGroup = this.fb.group({
    nombre : ['javier',[Validators.required,Validators.minLength(4)]],
    email : ['test@test.com',[Validators.required,Validators.email]],
    password : ['123456',[Validators.required,Validators.minLength(6)]],
    password2 : ['123456',[Validators.required,Validators.minLength(6)]],
  },
  {validators:[this.validatorAuthService.contraseñasIguales('password','password2')]}
  )
  constructor(private fb : FormBuilder,
    private validatorAuthService : ValidatorAuthService,
    private authService : AuthService,
    private router : Router,
    private messageService : MessageService
    ) { }

  ngOnInit(): void {
  }
  mostrar(){
    this.usuarioRegister = {
      nombre  : this.miFormulario.get('nombre')?.value,
      correo  : this.miFormulario.get('email')?.value, 
      password: this.miFormulario.get('password')?.value,
      rol     : "USER_ROLE"
    }
    this.authService.register(this.usuarioRegister)
      .subscribe(resp=>{
        if(resp){
          this.messageService.add({severity:'success', summary: 'Success', detail: 'Usuario creado con exito.'});
          setTimeout(()=>this.router.navigate(['/auth']),2000)
          
        }
      })
  }
  tieneError(campo : string): boolean{
    return this.miFormulario.get(campo)?.invalid 
      && this.miFormulario.get(campo)?.touched
       || false
  }

}
