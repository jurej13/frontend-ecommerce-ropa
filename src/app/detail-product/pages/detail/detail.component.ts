import {  Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Store } from '@ngrx/store';
import { MessageService } from 'primeng/api';
import { Observable } from 'rxjs';
import { switchMap  } from 'rxjs/operators';
import { Usuario } from 'src/app/auth/interface/authResponse.interface';
import { Producto } from 'src/app/interfaces/productos.interface';
import { ProductoService } from 'src/app/services/producto.service';
import { addToCart } from 'src/app/state/actions/cartShopping.actions';
import { AppState } from 'src/app/state/app.state';
import { SelectToken, SelectUser } from 'src/app/state/selectors/authLogin.selectors';
import { selectShopping } from 'src/app/state/selectors/shopping.selectors';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  product !: Producto

  talles : number[] = [32,34,36,38,40,42]
  value : any = {
    talle : 0,
    toggleColor : false
  }
  cantidad : number = 1
  token$ : Observable<string> = this.store.select(SelectToken)
  usuario$ :Observable<Usuario> = this.store.select(SelectUser)
  productosCart$  = this.store.select(selectShopping)
  productosCart !: Producto[]

  token !: string
  idUsuario !: string
  constructor(
    private route : ActivatedRoute,
    private productoService : ProductoService,
    private store : Store<AppState>,
    private messageService : MessageService
    ) {
      this.token$.subscribe(resp=> this.token = resp)
      this.usuario$.subscribe(resp=> this.idUsuario = resp.uid)
      this.productosCart$.subscribe(resp=> this.productosCart = resp)
    }
  
  
  ngOnInit(): void { 
    
    this.route.params.pipe(
      switchMap(({id})=> this.productoService.getProductoById(id))
    ).subscribe(
      (resp) => this.product = resp )
  }

  revisarChecked (talle : number) {
    if (this.product.talle.includes(talle))return true
    else return false
  }
  changeToActive(talle : number){
    return (this.value.toggleColor == true && this.value.talle == talle) ? 'bg-red-600' : ''
  }
  mostrar(talle : number){
    this.value.talle = talle
    this.value.toggleColor = true
  }
  
  addToCart(){
    let producto = {
      productoCart:this.product,
      cantidad : this.cantidad
    }
    
    if(!this.productosCart.includes(this.product)){
      producto.productoCart.cantidad = this.cantidad
      this.store.dispatch(addToCart(producto))
      this.messageService.add({key:'carrito',severity:'success', summary: 'Success', detail: 'Added to cart succesful.'});
    }else{
      this.messageService.add({key:'carrito',severity:'error', summary: 'Error', detail: 'Is already in the cart.'});
    }
  }
 
  addFavorite(idFavorite : string){
    this.productoService.addFavorite(this.idUsuario,this.token,idFavorite)
      .subscribe(_=>{
        this.messageService.add({key:'favorite',severity:'success', summary: 'Success', detail: 'Added to favorite succesful.'});
      })
  }
}
