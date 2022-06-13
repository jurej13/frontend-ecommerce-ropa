import {  AfterContentInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Producto } from 'src/app/interfaces/productos.interface';
import { ProductoService } from 'src/app/services/producto.service';
import { addToCart } from 'src/app/state/actions/cartShopping.actions';
import { AppState } from 'src/app/state/app.state';
import { selectShopping } from 'src/app/state/selectors/shopping.selectors';
import { removeFromCart } from '../../../state/actions/cartShopping.actions';

@Component({
  selector: 'app-card-shoppingcar',
  templateUrl: './card-shoppingcar.component.html',
  styleUrls: ['./card-shoppingcar.component.css']
})
export class CardShoppingcarComponent implements OnInit,AfterContentInit {
  @Input() item !: Producto
  @Output() deleteItem = new EventEmitter()
  copiaItem !: Producto
  cantidad : number  = 0
  
  constructor(private store : Store<AppState>,
    private productoService : ProductoService) {
   }
  ngAfterContentInit(): void {
    this.cantidad = this.item.cantidad!
  }
  

  ngOnInit(): void {
  }
  deleteFromCart(item : Producto){
    this.deleteItem.emit(item)
  }
  mostrar(){
    this.productoService.getProductoById(this.item._id).subscribe(
      resp=> {
        resp.cantidad = this.cantidad
        this.store.dispatch(removeFromCart({productoCart : this.item}))
        this.store.dispatch(addToCart({productoCart : resp,cantidad: this.cantidad}))
      }
    )
  }
}
