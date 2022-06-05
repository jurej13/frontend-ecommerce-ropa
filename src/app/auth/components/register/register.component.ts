import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  miFormulario : FormGroup = this.fb.group({
    nombre : ['',[Validators.required,Validators.minLength(4)]],
    email : ['',[Validators.required,Validators.minLength(4)]],
    password : ['',[Validators.required,Validators.minLength(4)]],
    password2 : ['',[Validators.required,Validators.minLength(4)]],
  })
  constructor(private fb : FormBuilder) { }

  ngOnInit(): void {
  }
  mostrar(){
    console.log(this.miFormulario.value)
  }

}
