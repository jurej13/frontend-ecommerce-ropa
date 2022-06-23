import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import { Producto } from 'src/app/interfaces/productos.interface';
import { ProductoService } from 'src/app/services/producto.service';
import { AppState } from 'src/app/state/app.state';
import { SelectToken } from 'src/app/state/selectors/authLogin.selectors';
import { selectShopping } from 'src/app/state/selectors/shopping.selectors';
import { cleanCart, removeFromCart } from '../../../state/actions/cartShopping.actions';
import { selectTotalPrice } from '../../../state/selectors/shopping.selectors';
import { switchMap } from 'rxjs/operators';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {
  productosCart$  = this.store.select(selectShopping)
  productosCart !: Producto[]
  total !: number
  token !: string
  constructor(private store : Store<AppState>,
      private router : Router,
      private productoService : ProductoService,
      private messageService : MessageService
    ) { 
      this.store.select(SelectToken).subscribe(token => this.token = token)
    }
  ngOnInit(): void {
    this.productosCart$.subscribe(resp=> this.productosCart = resp)
    this.store.select(selectTotalPrice).subscribe(resp => this.total = resp)
  }
  deleteFromChart(item : Producto){
    this.store.dispatch(removeFromCart({productoCart:item}))
  }
  realizarCompra(){
    this.productosCart.forEach(prod =>{
      this.productoService.getProductoById(prod._id)
        .pipe(
          map(resp=> {resp.stock=resp.stock - prod.cantidad!
            if(resp.stock<= 0){
              this.messageService.add({severity:'error', summary: 'Error',
               detail: `Stock insuficiente de  ${resp.nombre}`});
              throw new Error(`Stock insuficiente de  ${resp.nombre}`)
            }
            return resp
          }),
          switchMap(resp=> this.productoService.updateProductById(resp,prod._id,this.token))
          ).subscribe(_=>{
            this.messageService.add({severity:'success', summary: 'Success',
              detail: 'Compra Realizada.'});
            setTimeout(()=>this.router.navigate(['/home']),500)
          this.store.dispatch(cleanCart())
        })
      
    })
  }

}
