import { DOCUMENT } from '@angular/common';
import { Component,  Inject, OnInit } from '@angular/core';
import { Producto } from 'src/app/interfaces/productos.interface';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  showComponent :boolean = false;
  productos !: Producto[]
  constructor(
    private productoService : ProductoService,
    @Inject(DOCUMENT) private document : Document 
    ) {}

  ngOnInit(): void {
    this.productoService.getProductos()
      .subscribe({next:productos => {this.productos = productos},
        error:err => console.log(err)})
  }
  
  // @HostListener('window:scroll')
  //   animationOnScroll(){
  //     const yOffSet = window.scrollY //numero de pixeles que se desplaza
  //     // if(screen ) ver forma de entrar al screen
  //     return (this.showComponent = (yOffSet) > 30)
  //        ? 'scalein animation-duration-1000 animation-delay-300'
  //        : ''
  //   }
 
  

}
