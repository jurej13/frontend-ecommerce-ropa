import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import {MenuItem} from 'primeng/api';
import { isEmpty, Observable } from 'rxjs';
import { Logout } from 'src/app/state/actions/authLogin.actions';
import { AppState } from 'src/app/state/app.state';
import { SelectToken } from 'src/app/state/selectors/authLogin.selectors';
import { AuthService } from '../../auth/services/auth.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  items !: MenuItem[];
  token$ : Observable<string> = this.store.select(SelectToken)
  visible : boolean = false
  visible2 !: any 
  constructor(
    private store : Store<AppState>
    ) { } 
    
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
  logout(){
    this.store.dispatch(Logout())
  }
  

}
