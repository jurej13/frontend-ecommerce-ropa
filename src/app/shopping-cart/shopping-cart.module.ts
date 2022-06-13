import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShoppingCartRoutingModule } from './shopping-cart-routing.module';
import { ShoppingComponent } from './pages/shopping/shopping.component';
import { CardShoppingcarComponent } from './component/card-shoppingcar/card-shoppingcar.component';
import { PrimengModule } from '../primeng/primeng.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ShoppingComponent,
    CardShoppingcarComponent,
    
  ],
  imports: [
    CommonModule,
    ShoppingCartRoutingModule,
    PrimengModule,
    FormsModule
  ]
})
export class ShoppingCartModule { }
