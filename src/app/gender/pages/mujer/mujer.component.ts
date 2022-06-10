import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription, switchMap } from 'rxjs';
import { Producto } from 'src/app/interfaces/productos.interface';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-mujer',
  templateUrl: './mujer.component.html',
  styleUrls: ['./mujer.component.css']
})
export class MujerComponent implements OnInit {
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
    if(this.router.url=='/gender/mujer'){
      this.productosSubscription=this.productService.getProductByGender('MUJER').subscribe(resp=>this.productos=resp)
    }else if(
         this.router.url=='/gender/mujer/PANTALONES'
      || this.router.url=='/gender/mujer/REMERAS'
      || this.router.url=='/gender/mujer/CAMPERAS'
    ){
      this.productosSubscription=this.route.params.pipe(
        switchMap(({cat})=> this.productService.getProductosByCatMujer(cat))
      ).subscribe(resp => this.productos = resp)
    }else{
      this.productosSubscription=this.route.params.pipe(
        switchMap(({talle})=>this.productService.getProductosByTalleMujer(talle))
      ).subscribe(resp=> this.productos = resp)
    }  
  }

}
