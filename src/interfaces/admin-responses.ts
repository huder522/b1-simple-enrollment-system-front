import { Professor, Person } from "./";


/* 
  GET
  Enrollment - Get Todas las Matriculas
  {{url}}/api/enrollment
*/
// Generated by https://quicktype.io

export interface AdminEnrollmentsRes {
  ok:         boolean;
  msg:        string;
  matriculas: Matricula[];
}

export interface Matricula {
  student: Course;
  course:  Course;
  id:      string;
}

export interface Course {
  _id:  string;
  name: string;
}


// Generated by https://quicktype.io
/* 
  GET
  People - Get People
  {{url}}/api/persons?limit=5&from=0
*/
export interface AdminUsersRes {
  ok:     boolean;
  msg:    string;
  total:  number;
  people: Person[];
}


/* 
  GET
  Courses - Get All Courses
  {{url}}/api/courses
*/
// Generated by https://quicktype.io
export interface AdminCoursesRes {
  ok:      boolean;
  msg:     string;
  total:   number;
  courses: Course[];
}

export interface Course {
  name:      string;
  professor: Professor;
  id:        string;
}

/* 
 */

// Generated by https://quicktype.io

export interface AdminRegisterUserRes {
  ok:     boolean;
  msg:    string;
  person: Person;
}




