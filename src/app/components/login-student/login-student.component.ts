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
import { Student } from '../../interfaces/auth';

@Component({
  selector: 'app-login-student',
  standalone: true,
  imports: [
    CardModule,
    InputTextModule,
    FormsModule,
    PasswordModule,
    ButtonModule,
    MenuComponent,
  ],
  templateUrl: './login-student.component.html',
  styleUrl: './login-student.component.css',
})
export class LoginStudentComponent {
  login = {
    id: '',
    password: '',
  };

  private authService = inject(AuthService);
  private router = inject(Router);
  private messageService = inject(MessageService);
  onLogin() {
    const { id, password } = this.login;
    this.authService.getStudentDetails(parseInt(id), password).subscribe({
      next: (response: Student) => {
        sessionStorage.setItem('id', id);
        this.router.navigate(['home']);
      },
      error: () => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Invalid ID or password',
        });
      },
    });
  }
}
