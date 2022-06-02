import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailProductRoutingModule } from './detail-product-routing.module';
import { DetailComponent } from './pages/detail/detail.component';
import { PrimengModule } from '../primeng/primeng.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DetailComponent
  ],
  imports: [
    CommonModule,
    DetailProductRoutingModule,
    PrimengModule,
    FormsModule
  ]
})
export class DetailProductModule { }
