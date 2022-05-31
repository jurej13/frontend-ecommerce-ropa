import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { SliderComponent } from './components/slider/slider.component';
import { CardHomeComponent } from './components/card-home/card-home.component';
import { PrimengModule } from '../primeng/primeng.module';


@NgModule({
  declarations: [
    HomeComponent,
    SliderComponent,
    CardHomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    PrimengModule
  ]
})
export class HomeModule { }
