import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { authGuard } from './guards/auth.guard';
import { RegisterTeacherComponent } from './components/register-teacher/register-teacher.component';
import { RegisterStudentComponent } from './components/register-student/register-student.component';
import { LoginStudentComponent } from './components/login-student/login-student.component';
import { LoginTeacherComponent } from './components/login-teacher/login-teacher.component';

export const routes: Routes = [
  { path: 'login-student', component: LoginStudentComponent },
  { path: 'login-teacher', component: LoginTeacherComponent },
  { path: 'register-teacher', component: RegisterTeacherComponent },
  { path: 'register-student', component: RegisterStudentComponent },
  { path: 'home', component: HomeComponent, canActivate : [authGuard] },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];
