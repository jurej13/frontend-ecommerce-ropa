import { Producto } from "../productos.interface";



export interface ShoppingCartState{
    total : number,
    productosCart : Producto[]
}