import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { MessageService } from 'primeng/api';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/auth/interface/authResponse.interface';
import { Producto } from 'src/app/interfaces/productos.interface';
import { ProductoService } from 'src/app/services/producto.service';
import { AppState } from 'src/app/state/app.state';
import { SelectToken, SelectUser } from 'src/app/state/selectors/authLogin.selectors';

@Component({
  selector: 'app-card-home',
  templateUrl: './card-home.component.html',
  styleUrls: ['./card-home.component.css']
})
export class CardHomeComponent implements OnInit {
  responsiveOptions : any = []
  @Input() productos !: Producto[]
  token$ : Observable<string> = this.store.select(SelectToken)
  usuario$ : Observable<Usuario> = this.store.select(SelectUser)
  token !: string
  usuario !: Usuario
  constructor(
    private store : Store<AppState>,
    private productService:ProductoService,
    private messageService : MessageService
  ) {
    this.token$.subscribe(resp=> this.token = resp )
    this.usuario$.subscribe(resp=> this.usuario = resp )
    this.responsiveOptions = [
      {
          breakpoint: '1024px',
          numVisible: 3,
          numScroll: 3
      },
      {
          breakpoint: '768px',
          numVisible: 2,
          numScroll: 2
      },
      {
          breakpoint: '560px',
          numVisible: 1,
          numScroll: 1
      }
  ];
}

  ngOnInit(): void {
  }
  addFavorite(idFavorite : string){
    if(!this.usuario.favorites?.includes(idFavorite)){
      this.productService.addFavorite(this.usuario.uid,this.token,idFavorite)
        .subscribe(_=>{
          this.messageService.add(
            {severity:'success', summary: 'Success',
             detail: 'Added to favorite succesful.'}
             );
        })
    }else{
      this.messageService.add(
        {severity:'warn', summary: 'Warn',
         detail: 'This item is already in favorites.'}
         );
    }
  }
 
}
