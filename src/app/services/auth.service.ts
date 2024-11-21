import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterStudentPostData, RegisterTeacherPostData, Student, Teacher } from '../interfaces/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = 'http://localhost:8080/api/auth';
  constructor(private http: HttpClient) {}

  registerStudent(postData: RegisterStudentPostData) {
    return this.http.post<{ message: string }>(`${this.baseUrl}/register-student`, postData);
  }

  registerTeacher(postData: RegisterTeacherPostData) {
    return this.http.post<{ message: string }>(`${this.baseUrl}/register-teacher`, postData);
  }

  getStudentDetails(id: number, password: string): Observable<Student> {
    return this.http.get<Student>(
      `${this.baseUrl}/students?id=${id}&password=${password}`
    );
  }
  
  getTeacherDetails(email: string, password: string): Observable<Teacher> {
    return this.http.get<Teacher>(
      `${this.baseUrl}/teachers?email=${email}&password=${password}`
    );
  }
  
}
