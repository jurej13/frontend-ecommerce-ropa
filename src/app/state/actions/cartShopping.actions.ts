import { createAction, props } from "@ngrx/store"
import {Producto} from '../../interfaces/productos.interface'



export const addToCart = createAction(
    '[Shopping Cart] Add success',
    props<{productoCart : Producto,cantidad : number }>()
)
export const removeFromCart = createAction(
  '[Shopping Cart] Remove item',
  props<{productoCart : Producto}>()
)
export const cleanCart = createAction(
  '[Shopping Cart] Clean Cart'
)