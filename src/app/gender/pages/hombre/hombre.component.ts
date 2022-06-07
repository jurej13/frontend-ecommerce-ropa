import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {MenuItem} from 'primeng/api';
import { Subscription, switchMap, tap } from 'rxjs';
import { Producto } from 'src/app/interfaces/productos.interface';
import { ProductoService } from 'src/app/services/producto.service';
@Component({
  selector: 'app-hombre',
  templateUrl: './hombre.component.html',
  styleUrls: ['./hombre.component.css']
})
export class HombreComponent implements OnInit,OnDestroy {
  currentUrl !: string
  productos !: Producto[]
  productosSubscription !: Subscription
  constructor(
    private route : ActivatedRoute,
    private productService : ProductoService,
    private router : Router
    ){
  }
  ngOnDestroy(): void {
    this.productosSubscription.unsubscribe()
  }
  ngOnInit(): void {
    if(this.router.url=='/gender/hombre'){
      this.productosSubscription=this.productService.getProductByGender('HOMBRE').subscribe(resp=>this.productos=resp)
    }else if(
         this.router.url=='/gender/hombre/PANTALON'
      || this.router.url=='/gender/hombre/REMERAS'
      || this.router.url=='/gender/hombre/CAMPERAS'
    ){
      this.productosSubscription=this.route.params.pipe(
        switchMap(({cat})=> this.productService.getProductosByCat(cat))
      ).subscribe(resp => this.productos = resp)
    }else{
      this.productosSubscription=this.route.params.pipe(
        switchMap(({talle})=>this.productService.getProductosByTalle(talle))
      ).subscribe(resp=> this.productos = resp)
    }
    
  }

  

}
