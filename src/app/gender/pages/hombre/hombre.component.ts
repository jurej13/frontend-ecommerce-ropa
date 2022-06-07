import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {MenuItem} from 'primeng/api';
import { switchMap, tap } from 'rxjs';
import { Producto } from 'src/app/interfaces/productos.interface';
import { ProductoService } from 'src/app/services/producto.service';
@Component({
  selector: 'app-hombre',
  templateUrl: './hombre.component.html',
  styleUrls: ['./hombre.component.css']
})
export class HombreComponent implements OnInit {
  
  productos !: Producto[]
  constructor(
    private route : ActivatedRoute,
    private productService : ProductoService
    ){
  }
  ngOnInit(): void {
    this.route.params.pipe(
      switchMap(({cat})=> this.productService.getProductosForHombre(cat))
    ).subscribe(resp => console.log(resp))

  }

  

}
