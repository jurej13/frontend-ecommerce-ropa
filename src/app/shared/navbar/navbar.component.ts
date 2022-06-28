import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import {MenuItem} from 'primeng/api';
import { Observable } from 'rxjs';
import { Producto } from 'src/app/interfaces/productos.interface';
import { ProductoService } from 'src/app/services/producto.service';
import { Logout } from 'src/app/state/actions/authLogin.actions';
import { cleanCart } from 'src/app/state/actions/cartShopping.actions';
import { AppState } from 'src/app/state/app.state';
import { SelectToken } from 'src/app/state/selectors/authLogin.selectors';
import { selectShopping } from 'src/app/state/selectors/shopping.selectors';
import { AuthService } from '../../auth/services/auth.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  visibleSidebar1: boolean = true
  items !: MenuItem[];
  token$ : Observable<string> = this.store.select(SelectToken)
  shopping$ : Observable<Producto[]> = this.store.select(selectShopping)
  shopping !: Producto[]
  visible : boolean = false
  visible2 !: any
  productos !: Observable<Producto[]>
  termino : string = ''
  constructor(
    private store : Store<AppState>,
    private productoService : ProductoService
    ) { 
      this.shopping$.subscribe(resp=>{
        this.shopping = resp
      } )
    } 
    
  ngOnInit() {
    
      this.items = [
          {
            label:'Home',
            icon:'pi pi-home',
            routerLink:'home'
          },
          {
            label:'Hombre',
            icon:'pi pi-tag',
            routerLink:'gender/hombre'
          },
          {
            label:'Mujer',
            icon:'pi pi-tag',
            routerLink:'gender/mujer'
          }
      ]; 

  }
  filterProduct(event : any){
    console.log(event.query)
    this.productos=this.productoService.buscarProducto(event.query)
      
  }
  logout(){
    this.store.dispatch(Logout())
    this.store.dispatch(cleanCart())
  }
  

}
