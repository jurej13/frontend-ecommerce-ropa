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

  constructor(
    private route : ActivatedRoute,
    private productoService : ProductoService
    ) { }

  ngOnInit(): void {
    
    this.route.params.pipe(
      switchMap(({id})=> this.productoService.getProductoById(id))
    ).subscribe(
      (resp) => this.product = resp
      )
  }

}
