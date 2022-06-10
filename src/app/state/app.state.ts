import { ActionReducerMap } from '@ngrx/store';
import { LoginAuth } from '../interfaces/state-interface/loginAuth.state';
import { ShoppingCartState } from '../interfaces/state-interface/shopping-cart.state';



import { loginReducer} from './reducers/authLogin.reducers';
import { shoppingReducer } from './reducers/cartShopping.reducers';

export interface AppState {
 
  usuario : LoginAuth;
  shopping : ShoppingCartState
 
  // producto : ProductoState
  
//   favoritos: ReadonlyArray<Book>; aca irian los diferentes estados.
//   users: ReadonlyArray<Book>;
}
export const ROOT_REDUCERS : ActionReducerMap<AppState>={ 
    usuario : loginReducer ,
    shopping : shoppingReducer
}