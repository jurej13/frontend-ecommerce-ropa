import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Producto } from 'src/app/interfaces/productos.interface';

@Component({
  selector: 'app-card-shoppingcar',
  templateUrl: './card-shoppingcar.component.html',
  styleUrls: ['./card-shoppingcar.component.css']
})
export class CardShoppingcarComponent implements OnInit {
  @Input() item !: Producto
  @Output() deleteItem = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }
  deleteFromCart(item : Producto){
    this.deleteItem.emit(item)
  }
}
