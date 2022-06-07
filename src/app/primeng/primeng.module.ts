import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {CarouselModule} from 'primeng/carousel';
import {InputTextModule} from 'primeng/inputtext';
import {InputNumberModule} from 'primeng/inputnumber';
import {MenubarModule} from 'primeng/menubar';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {ToastModule} from 'primeng/toast';
import {PanelMenuModule} from 'primeng/panelmenu';
@NgModule({
  exports: [
    ButtonModule,
    CarouselModule,
    CardModule,
    CommonModule,
    InputTextModule,
    InputNumberModule,
    MenubarModule,
    ProgressSpinnerModule,
    PanelMenuModule,
    ToastModule
  ]
})
export class PrimengModule { }
