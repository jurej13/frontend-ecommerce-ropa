import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MenubarModule} from 'primeng/menubar';
import {CarouselModule} from 'primeng/carousel';
import {ButtonModule} from 'primeng/button';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
@NgModule({
  
  exports: [
    ButtonModule,
    CarouselModule,
    CommonModule,
    MenubarModule,
    ProgressSpinnerModule
  ]
})
export class PrimengModule { }
