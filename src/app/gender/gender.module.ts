import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GenderRoutingModule } from './gender-routing.module';
import { MainComponent } from './pages/main/main.component';
import { CardComponent } from './components/card/card.component';
import { PrimengModule } from '../primeng/primeng.module';
import { HombreComponent } from './pages/hombre/hombre.component';
import { MujerComponent } from './pages/mujer/mujer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SidebarMujerComponent } from './components/sidebar-mujer/sidebar-mujer.component';


@NgModule({
  declarations: [
    MainComponent,
    CardComponent,
    HombreComponent,
    MujerComponent,
    SidebarComponent,
    SidebarMujerComponent
  ],
  imports: [
    CommonModule,
    GenderRoutingModule,
    PrimengModule
  ]
})
export class GenderModule { }
