import { createSelector } from "@ngrx/store";
import { ShoppingCartState } from "src/app/interfaces/state-interface/shopping-cart.state";
import { AppState } from "../app.state";

export const selectShoppingFeature = (state: AppState) => state.shopping; 
export const selectShopping = createSelector(
    selectShoppingFeature,
  //   selectShopping, aca iria agregando nuevos selectores.
  
    (state: ShoppingCartState) => state.productosCart //HIJO
  //   (a:any,b:any) => state...
  );
export const selectTotalPrice = createSelector(
  selectShoppingFeature,
  (state:ShoppingCartState) => state.total
)