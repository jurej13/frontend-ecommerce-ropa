import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {ButtonModule} from 'primeng/button';
import {CarouselModule} from 'primeng/carousel';
import {InputNumberModule} from 'primeng/inputnumber';
import {MenubarModule} from 'primeng/menubar';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
@NgModule({
  
  exports: [
    ButtonModule,
    CarouselModule,
    CommonModule,
    InputNumberModule,
    MenubarModule,
    ProgressSpinnerModule,
  ]
})
export class PrimengModule { }
