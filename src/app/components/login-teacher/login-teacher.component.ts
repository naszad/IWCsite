import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { AuthService } from '../../services/auth.service';
import { MessageService } from 'primeng/api';
import { MenuComponent } from '../menu/menu.component';
import { Teacher } from '../../interfaces/auth';

@Component({
  selector: 'app-login-teacher',
  standalone: true,
  imports: [
    CardModule,
    InputTextModule,
    FormsModule,
    PasswordModule,
    ButtonModule,
    RouterLink,
    MenuComponent,
  ],
  templateUrl: './login-teacher.component.html',
  styleUrl: './login-teacher.component.css',
})
export class LoginTeacherComponent {
  login = {
    email: '',
    password: '',
  };

  private authService = inject(AuthService);
  private router = inject(Router);
  private messageService = inject(MessageService);
  onLogin() {
    const { email, password } = this.login;
    this.authService.getTeacherDetails(email, password).subscribe({
      next: (response: Teacher) => {
        sessionStorage.setItem('email', email);
        this.router.navigate(['home']);
      },
      error: () => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Invalid email or password',
        });
      },
    });
  }
}
