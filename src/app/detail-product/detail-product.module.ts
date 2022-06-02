import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailProductRoutingModule } from './detail-product-routing.module';
import { DetailComponent } from './pages/detail/detail.component';
import { PrimengModule } from '../primeng/primeng.module';



@NgModule({
  declarations: [
    DetailComponent
  ],
  imports: [
    CommonModule,
    DetailProductRoutingModule,
    PrimengModule,
    
  ]
})
export class DetailProductModule { }
