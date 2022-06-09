import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Producto } from 'src/app/interfaces/productos.interface';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() item !: Producto
  @Input() token !: string
  @Input() idUsuario !: string
  @Output() deleteItem = new EventEmitter()
  constructor(
  ) { }

  ngOnInit(): void {
  }

  deleteFavorite(idProducto: string){
    this.deleteItem.emit(idProducto)
  }

}
