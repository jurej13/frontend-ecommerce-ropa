import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  categorias  : string[] = ['REMERAS','CAMPERAS','PANTALON'] 
  talles : string[] = ['36','38','40','42']
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
                  label: '36',
                  icon:'pi pi-search-plus',
                  routerLink:['/gender/hombre/talles',this.talles[0]]
              },
              {
                  label: '38',
                  icon:'pi pi-search-plus',
                  routerLink:['/gender/hombre/talles',this.talles[1]]
              },
              {
                  label: '40',
                  icon:'pi pi-search-plus',
                  routerLink:['/gender/hombre/talles',this.talles[2]]
              },
              {
                  label: '42',
                  icon:'pi pi-search-plus',
                  routerLink:['/gender/hombre/talles',this.talles[3]]
              },
          ]
          },
      ]
  }

}
