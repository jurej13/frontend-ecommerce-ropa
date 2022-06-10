import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShoppingCartRoutingModule } from './shopping-cart-routing.module';
import { ShoppingComponent } from './pages/shopping/shopping.component';
import { TableShoppingComponent } from './component/table-shopping/table-shopping.component';


@NgModule({
  declarations: [
    ShoppingComponent,
    TableShoppingComponent
  ],
  imports: [
    CommonModule,
    ShoppingCartRoutingModule
  ]
})
export class ShoppingCartModule { }
