import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  items !: MenuItem[];

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
          },
          {
              label:'Users',
              icon:'pi pi-fw pi-user',
          },
          {
              label:'Events',
              icon:'pi pi-fw pi-calendar',
          },
          {
              label:'Quit',
              icon:'pi pi-fw pi-power-off'
          }
      ];
  }

}
