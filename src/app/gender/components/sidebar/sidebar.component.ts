import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  categorias  : string[] = ['REMERAS','CAMPERAS','PANTALON'] 
  items !: MenuItem[];

  ngOnInit() {
    
      this.items = [
          {
            label:'Todos',
            icon: 'pi pi-search-plus',
            routerLink:'/gender/hombre'
          },
          {
          label: 'Categorias',
          icon:'pi pi-search-plus',
          items: [
              {
                  label: 'Remeras',
                  icon:'pi pi-search-plus',
                  routerLink:['/gender/hombre',this.categorias[0]]
              },
              {
                  label: 'Camperas',
                  icon:'pi pi-search-plus',
                  routerLink:['/gender/hombre',this.categorias[1]]
                },
              {
                  label: 'Pantalon',
                  icon:'pi pi-search-plus',
                  routerLink:['/gender/hombre',this.categorias[2]]
                }
          ]
          },
          {
          label: 'Talle',
          icon:'pi pi-search-plus',
          items: [
              {
                  label: 'Left',
                  icon:'pi pi-search-plus'
              },
              {
                  label: 'Right',
                  icon:'pi pi-search-plus'
              },
              {
                  label: 'Center',
                  icon:'pi pi-search-plus'
              },
              {
                  label: 'Justify',
                  icon:'pi pi-search-plus'
              }
          ]
          },
      ]
  }

}
