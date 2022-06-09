import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Observable, switchMap } from 'rxjs';
import { Producto } from 'src/app/interfaces/productos.interface';
import { ProductoService } from 'src/app/services/producto.service';
import { AppState } from 'src/app/state/app.state';
import { SelectToken } from 'src/app/state/selectors/authLogin.selectors';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {
  
  
  token$ : Observable<string> = this.store.select(SelectToken)
  token : string = ''
  id : string = '624c7589f166067dcb572e8e'
  productos !: Producto[]
  
  
  constructor(private productoService : ProductoService,
      private store : Store<AppState>
    ) {
      this.token$.subscribe(token=> this.token = token)
     }
  
  
  
  ngOnInit(): void {
    this.productoService.getProductosFavoritos(this.id,this.token)
      .pipe(
        map(resp =>{
          const itemsArr : any[] = []
           resp.forEach((producto:any)=>{
             this.productoService.getProductoById(producto).subscribe(
               resp => {
                 itemsArr.push(resp)                   
                 this.productos = itemsArr
               }
             )
           })
          })
      ).subscribe()
      

  }

}
