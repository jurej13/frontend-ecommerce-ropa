import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Producto } from 'src/app/interfaces/productos.interface';
import { AppState } from 'src/app/state/app.state';
import { selectShopping } from 'src/app/state/selectors/shopping.selectors';
import { cleanCart, removeFromCart } from '../../../state/actions/cartShopping.actions';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {
  productosCart$  = this.store.select(selectShopping)
  productosCart !: Producto[]
  constructor(private store : Store<AppState>,
      private router : Router
    ) { }

  ngOnInit(): void {
    this.productosCart$.subscribe(resp=> this.productosCart = resp)
  }
  deleteFromChart(item : Producto){
    this.store.dispatch(removeFromCart({productoCart:item}))
  }
  realizarCompra(){
    alert('Compra realizada')
    this.store.dispatch(cleanCart())
    setTimeout(()=>this.router.navigate(['/home']),500)
  }

}
