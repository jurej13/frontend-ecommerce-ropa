import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorAuthService } from '../../services/validator-auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  miFormulario : FormGroup = this.fb.group({
    nombre : ['',[Validators.required,Validators.minLength(4)]],
    email : ['',[Validators.required,Validators.email]],
    password : ['',[Validators.required,Validators.minLength(6)]],
    password2 : ['',[Validators.required,Validators.minLength(6)]],
  },
  {validators:[this.validatorAuthService.contraseñasIguales('password','password2')]}
  )
  constructor(private fb : FormBuilder,
    private validatorAuthService : ValidatorAuthService
    ) { }

  ngOnInit(): void {
  }
  mostrar(){
    console.log(this.miFormulario.value)
  }
  tieneError(campo : string): boolean{
    return this.miFormulario.get(campo)?.invalid 
      && this.miFormulario.get(campo)?.touched
       || false
  }

}
