import {  AfterContentInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Producto } from 'src/app/interfaces/productos.interface';

@Component({
  selector: 'app-card-shoppingcar',
  templateUrl: './card-shoppingcar.component.html',
  styleUrls: ['./card-shoppingcar.component.css']
})
export class CardShoppingcarComponent implements OnInit,AfterContentInit {
  @Input() item !: Producto
  @Output() deleteItem = new EventEmitter()
  cantidad : number  = 0
  constructor() {
   }
  ngAfterContentInit(): void {
    this.cantidad = this.item.cantidad!
  }
  

  ngOnInit(): void {
  }
  deleteFromCart(item : Producto){
    this.deleteItem.emit(item)
  }
  mostrar(){
    this.item.cantidad = this.cantidad
    console.log(this.item.cantidad)
  }
}
