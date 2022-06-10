import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoritoCarritoGuard } from './guards/favorito-carrito.guard';
import { LoginRegisterGuard } from './guards/login-register.guard';

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
    loadChildren:()=> import('./auth/auth.module').then( m=> m.AuthModule),
    canActivate:[LoginRegisterGuard]
  },
  {
    path:'gender',
    loadChildren:()=>import('./gender/gender.module').then(m=>m.GenderModule)
  },
  {
    path:'favoritos',
    loadChildren:()=> import('./favorites/favorites.module').then(m=>m.FavoritesModule),
    canActivate:[FavoritoCarritoGuard],
    canLoad:[FavoritoCarritoGuard]
  },
  {
    path:'shoppingCart',
    loadChildren:()=>import('./shopping-cart/shopping-cart.module').then(m=>m.ShoppingCartModule),
    canActivate:[FavoritoCarritoGuard],
    canLoad:[FavoritoCarritoGuard]
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
