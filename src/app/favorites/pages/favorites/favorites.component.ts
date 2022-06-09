import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Observable, switchMap } from 'rxjs';
import { Usuario } from 'src/app/auth/interface/authResponse.interface';
import { Producto } from 'src/app/interfaces/productos.interface';
import { ProductoService } from 'src/app/services/producto.service';
import { AppState } from 'src/app/state/app.state';
import { SelectToken, SelectUser } from 'src/app/state/selectors/authLogin.selectors';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {
  
  
  token$ : Observable<string> = this.store.select(SelectToken)
  token : string = ''
  usuario$ : Observable<Usuario> = this.store.select(SelectUser)
  idUsuario !: string
  productos !: Producto[]
  
  
  constructor(private productoService : ProductoService,
      private store : Store<AppState>,
      private messageService : MessageService
    ) {
      this.token$.subscribe(token=> this.token = token)
      this.usuario$.subscribe(resp => this.idUsuario = resp.uid)
     }
  ngOnInit(): void {
    this.getFavorites()
  }
  deleteFavorite(event : string){
    this.productoService.deleteFavoriteById(this.idUsuario,this.token,event)
      .subscribe(_=>{
        this.messageService.add(
          {severity:'success', summary: 'Success', detail:'Eliminado de Favoritos con exito' }
          );
        setTimeout(()=>this.getFavorites(),1000)
      })
  }
  getFavorites(){
    this.productoService.getProductosFavoritos(this.idUsuario,this.token)
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
