export interface RegisterTeacherPostData {
  name: string;
  email: string;
  password: string;
}

export interface Teacher extends RegisterTeacherPostData {
  id: number;
}

export interface RegisterStudentPostData {
  name: string;
  language: string;
  level: string;
  password: string;
}

export interface Student extends RegisterStudentPostData {
  id: number;
}