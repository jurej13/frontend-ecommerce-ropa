import { ActionReducerMap } from '@ngrx/store';
import { LoginAuth } from '../interfaces/state-interface/loginAuth.state';



import { loginReducer} from './reducers/authLogin.reducers';

export interface AppState {
 
  usuario : LoginAuth;
 
  // producto : ProductoState
  
//   favoritos: ReadonlyArray<Book>; aca irian los diferentes estados.
//   users: ReadonlyArray<Book>;
}
export const ROOT_REDUCERS : ActionReducerMap<AppState>={ 
    usuario : loginReducer  
}