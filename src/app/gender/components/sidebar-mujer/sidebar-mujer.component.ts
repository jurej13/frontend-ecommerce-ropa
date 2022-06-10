import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-sidebar-mujer',
  templateUrl: './sidebar-mujer.component.html',
  styleUrls: ['./sidebar-mujer.component.css']
})
export class SidebarMujerComponent implements OnInit {
  categorias  : string[] = ['REMERAS','CAMPERAS','PANTALONES'] 
  talles : string[] = ['36','38','40','42']
  items !: MenuItem[];

  ngOnInit() {    
      this.items = [
          {
            label:'Todos',
            icon: 'pi pi-search-plus',
            routerLink:'/gender/mujer'
          },
          {
          label: 'Categorias',
          icon:'pi pi-search-plus',
          items: [
              {
                  label: 'Remeras',
                  icon:'pi pi-search-plus',
                  routerLink:['/gender/mujer',this.categorias[0]]
              },
              {
                  label: 'Camperas',
                  icon:'pi pi-search-plus',
                  routerLink:['/gender/mujer',this.categorias[1]]
                },
              {
                  label: 'Pantalon',
                  icon:'pi pi-search-plus',
                  routerLink:['/gender/mujer',this.categorias[2]]
                }
          ]
          },
          {
          label: 'Talle',
          icon:'pi pi-search-plus',
          items: [
              {
                  label: '36',
                  icon:'pi pi-search-plus',
                  routerLink:['/gender/mujer/talles',this.talles[0]]
              },
              {
                  label: '38',
                  icon:'pi pi-search-plus',
                  routerLink:['/gender/mujer/talles',this.talles[1]]
              },
              {
                  label: '40',
                  icon:'pi pi-search-plus',
                  routerLink:['/gender/mujer/talles',this.talles[2]]
              },
              {
                  label: '42',
                  icon:'pi pi-search-plus',
                  routerLink:['/gender/mujer/talles',this.talles[3]]
              },
          ]
          },
      ]
  }

}
