import { Producto } from "src/app/interfaces/productos.interface";


export interface ProductoCart{
    productoCart : Producto,
    cantidad : number,
    type : string
}