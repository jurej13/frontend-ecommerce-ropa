import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {BadgeModule} from 'primeng/badge';
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {CarouselModule} from 'primeng/carousel';
import {InputTextModule} from 'primeng/inputtext';
import {InputNumberModule} from 'primeng/inputnumber';
import {MenubarModule} from 'primeng/menubar';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {ToastModule} from 'primeng/toast';
import {PanelMenuModule} from 'primeng/panelmenu';
import {SidebarModule} from 'primeng/sidebar';
@NgModule({
  exports: [
    BadgeModule,
    ButtonModule,
    CarouselModule,
    CardModule,
    CommonModule,
    InputTextModule,
    InputNumberModule,
    MenubarModule,
    SidebarModule,
    ProgressSpinnerModule,
    PanelMenuModule,
    ToastModule,
    
  ]
})
export class PrimengModule { }
