import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { passwordMismatchValidator } from '../../shared/password-mismatch.directive';
import { AuthService } from '../../services/auth.service';
import { RegisterTeacherPostData, Teacher } from '../../interfaces/auth';
import { MessageService } from 'primeng/api';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-register-teacher',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CardModule,
    InputTextModule,
    PasswordModule,
    ButtonModule,
    MenuComponent,
  ],
  templateUrl: './register-teacher.component.html',
  styleUrl: './register-teacher.component.css',
})
export class RegisterTeacherComponent {
  private registerTeacherService = inject(AuthService);
  private messageService = inject(MessageService);
  private router = inject(Router);
  registerForm = new FormGroup(
    {
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(/[a-z0-9\._%\+\-]+@[a-z0-9\.\-]+\.[a-z]{2,}$/),
      ]),
      password: new FormControl('', [Validators.required]),
      confirmPassword: new FormControl('', [Validators.required]),
    },
    {
      validators: passwordMismatchValidator,
    }
  );

  onRegister() {
    const postData = { ...this.registerForm.value };
    delete postData.confirmPassword;
    this.registerTeacherService.registerTeacher(postData as RegisterTeacherPostData).subscribe({
      next: (response) => {
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: response.message,
        });
        this.router.navigate(['login-teacher']);
        console.log(response);
      },
      error: (err) => {
        const errorMsg = err.error.message || 'Registration failed';
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: errorMsg,
        });
      },
    });
  }

  get name() {
    return this.registerForm.controls['name'];
  }

  get email() {
    return this.registerForm.controls['email'];
  }

  get password() {
    return this.registerForm.controls['password'];
  }

  get confirmPassword() {
    return this.registerForm.controls['confirmPassword'];
  }
}
