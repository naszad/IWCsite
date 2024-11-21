import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ButtonModule, MenubarModule, MenuComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  private router = inject(Router);

  logout() {
    sessionStorage.clear();
    this.router.navigate(['login-student']);
  }
}