import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimengModule } from '../primeng/primeng.module';

import { AuthRoutingModule } from './auth-routing.module';
import { MainAuthComponent } from './pages/main-auth/main-auth.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ErrorLoginDirective } from './directive/error-login.directive';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    MainAuthComponent,
    LoginComponent,
    RegisterComponent,
    ErrorLoginDirective
  ],
  imports: [
    AuthRoutingModule,
    CommonModule,
    HttpClientModule,
    PrimengModule,
    ReactiveFormsModule
  ],
  
})
export class AuthModule { }
