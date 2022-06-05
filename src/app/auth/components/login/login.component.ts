import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  miFormulario : FormGroup = this.fb.group({
    email : ['',[Validators.required,Validators.email]],
    password : ['',[Validators.required,Validators.minLength(6)]]
  })
  constructor(private fb : FormBuilder) { }

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
