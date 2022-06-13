


import { createReducer, on } from "@ngrx/store";
import { ShoppingCartState } from "src/app/interfaces/state-interface/shopping-cart.state";
import {  addToCart, cleanCart, removeFromCart } from "../actions/cartShopping.actions";

export const initialState: ShoppingCartState = {total:0, productosCart : []}


export const shoppingReducer = createReducer(
    initialState,
    on(addToCart,(state,action)=>{
        return {...state,total:state.total
            +(action.productoCart.precio*action.cantidad),
            productosCart:[...state.productosCart,action.productoCart],
        }
    }),
    on(removeFromCart,(state,action)=>{
        return {...state,total:state.total-action.productoCart.precio,productosCart:
            [...state.productosCart.filter(item=>item._id !== action.productoCart._id)]}
    }),
    on(cleanCart,(state)=>{
        return {...state,total:initialState.total,productosCart:initialState.productosCart}
    })
)