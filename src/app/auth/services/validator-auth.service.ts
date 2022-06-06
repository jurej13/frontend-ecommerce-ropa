import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorAuthService {

  constructor() { }


  contraseñasIguales(password1:string , password2:string){
    return (formGroup : AbstractControl) : ValidationErrors | null => {
      const pass1 = formGroup.get(password1)?.value
      const pass2 = formGroup.get(password2)?.value
      if(pass1!==pass2){
        formGroup.get(password2)?.setErrors({noIguales:true})
        return{
          noIguales:true
        }
      }
      formGroup.get(password2)?.setErrors(null)
      return null
    }
  }
}
