import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HombreComponent } from './pages/hombre/hombre.component';
import { MainComponent } from './pages/main/main.component';
import { MujerComponent } from './pages/mujer/mujer.component';

const routes: Routes = [
  {
    path:'',
    component:MainComponent,
    children:[
      {path:'hombre',component:HombreComponent},
      {path:'hombre/:cat',component:HombreComponent},
      {path:'mujer',component:MujerComponent},
      {path:'**',redirectTo:''}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GenderRoutingModule { }
