import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { MainAuthComponent } from './pages/main-auth/main-auth.component';

const routes: Routes = [{
  path:'',
  component:MainAuthComponent,
  children:[
    {path:'login',component:LoginComponent},
    {path:'register',component:RegisterComponent},
    {path:'**',redirectTo:'login'}
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
