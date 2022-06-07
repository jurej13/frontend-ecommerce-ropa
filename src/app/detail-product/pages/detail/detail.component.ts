import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { switchMap,tap } from 'rxjs/operators';
import { Producto } from 'src/app/interfaces/productos.interface';
import { ProductoService } from 'src/app/services/producto.service';
import { AppState } from 'src/app/state/app.state';
import { SelectToken } from 'src/app/state/selectors/authLogin.selectors';

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
  constructor(
    private route : ActivatedRoute,
    private productoService : ProductoService,
    private store : Store<AppState>,
    private router : Router
    ) {}
  
  ngOnInit(): void { 
    this.route.params.pipe(
      switchMap(({id})=> this.productoService.getProductoById(id))
    ).subscribe(
      (resp) => this.product = resp)
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
  verCantidad(){
    console.log(this.cantidad)
  }
  agregarACarrito(){
    
  }
  
}
