import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {ButtonModule} from 'primeng/button';
import {CarouselModule} from 'primeng/carousel';
import {InputTextModule} from 'primeng/inputtext';
import {InputNumberModule} from 'primeng/inputnumber';
import {MenubarModule} from 'primeng/menubar';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {ToastModule} from 'primeng/toast';
@NgModule({
  
  exports: [
    ButtonModule,
    CarouselModule,
    CommonModule,
    InputTextModule,
    InputNumberModule,
    MenubarModule,
    ProgressSpinnerModule,
    ToastModule
  ]
})
export class PrimengModule { }
