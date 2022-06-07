import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
 
 

//  Selector que tiene relacion con propiedad "productos"
// que yo cree en el app.state.ts
export const selectLoginAuth = (state: AppState) => state.usuario; //PADRE
// Agregar uno nuevo
// export const selectShopping = (state: AppState) => state.productos;
 
export const SelectToken = createSelector(
    selectLoginAuth,
//selectShopping, aca iria agregando nuevos selectores.

  (state) => state.token //HIJO
// (a:any,b:any) => state...
);
export const SelectUser = createSelector(
  selectLoginAuth,
// selectShopping, aca iria agregando nuevos selectores.

(state) => state.usuario //HIJO
//   (a:any,b:any) => state...
);