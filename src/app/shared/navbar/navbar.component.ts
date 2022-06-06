import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {MenuItem} from 'primeng/api';
import { AuthService } from '../../auth/services/auth.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  items !: MenuItem[];
  
  constructor(private authService : AuthService,
   
    ) {  
  }
  


  ngOnInit() {
      this.items = [
          {
              label:'Home',
              icon:'pi pi-home',
              routerLink:'home'
          },
          {
              label:'Edit',
              icon:'pi pi-fw pi-pencil',
          }
      ];
    
  }
  
  

}
