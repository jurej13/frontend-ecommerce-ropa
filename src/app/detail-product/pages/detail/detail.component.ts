import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { ErrorsProduct } from 'src/app/interfaces/error.interface';
import { Producto } from 'src/app/interfaces/productos.interface';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  product !: Producto
  talles : number[] = [36,38,40,42]
  value : any = {
    talle : 0,
    toggleColor : false
  }
  cantidad : number = 1
  

  constructor(
    private route : ActivatedRoute,
    private productoService : ProductoService
    ) { }

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

}
