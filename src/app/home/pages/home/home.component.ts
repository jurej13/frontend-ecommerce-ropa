import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/interfaces/productos.interface';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  productos !: Producto[]
  constructor(private productoService : ProductoService) { }

  ngOnInit(): void {
    this.productoService.getProductos()
      .subscribe({next:productos => {this.productos = productos},
        error:err => console.log(err)
      })
  }

}
