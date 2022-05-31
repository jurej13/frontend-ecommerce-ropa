import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MenubarModule} from 'primeng/menubar';
import {CarouselModule} from 'primeng/carousel';
import {ButtonModule} from 'primeng/button';
@NgModule({
  
  exports: [
    CommonModule,
    MenubarModule,
    CarouselModule,
    ButtonModule
  ]
})
export class PrimengModule { }
