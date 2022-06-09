import { Component, Input, OnInit } from '@angular/core';
import { Producto } from 'src/app/interfaces/productos.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() item !: Producto
  constructor() { }

  ngOnInit(): void {
  }

}
