import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavoritesRoutingModule } from './favorites-routing.module';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { CardComponent } from './components/card/card.component';
import { PrimengModule } from '../primeng/primeng.module';


@NgModule({
  declarations: [
    FavoritesComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    FavoritesRoutingModule,
    PrimengModule
  ]
})
export class FavoritesModule { }
