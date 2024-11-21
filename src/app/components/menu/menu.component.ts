import { Component } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';

@Component
(
  {
    selector: 'app-menu',
    standalone: true,
    imports: [MenubarModule],
    templateUrl: './menu.component.html',
    styleUrl: './menu.component.css'
  }
)
export class MenuComponent 
{
  items!: MenuItem[];
  ngOnInit() 
  {
    this.items = 
    [
      {
        label: 'Menu',
        items: 
        [
          {
            label: 'Register', 
            icon: 'pi pi-fw pi-plus',
            items: 
            [
              {
                label: 'Teacher',
                routerLink: ['/register-teacher']
              },
              {
                label: 'Student',
                routerLink: ['/register-student']
              }
            ]
          },
          {
            label: 'Login',
            icon: 'pi pi-fw pi-user',
            items: 
            [
              {
              label: 'Teacher',
              routerLink: ['/login-teacher']
              },
              {
                label: 'Student',
                routerLink: ['/login-student']
              }
            ]
          }
        ]
      }
    ];
  }
}
