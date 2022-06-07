import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'home',
    loadChildren:()=>import('./home/home.module').then(m=> m.HomeModule)
  },
  {
    path:'detail',
    loadChildren:()=>import('./detail-product/detail-product.module').then(m=> m.DetailProductModule)
  },
  {
    path:'auth',
    loadChildren:()=> import('./auth/auth.module').then( m=> m.AuthModule)
  },
  {
    path:'gender',
    loadChildren:()=>import('./gender/gender.module').then(m=>m.GenderModule)
  },
  {
    path:'**',redirectTo:'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
