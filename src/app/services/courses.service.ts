import { environment } from './../../environments/environment';
//Servicio que se puede inyectar en cualquier componente
//del modulo "root" (o de cualquier modulo) [app.module.ts]
import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Course } from '../model/course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  //Inyeccion de dependencias (se pasa al constructor)
  constructor(private http: HttpClient) { }

  loadCourses() {
    return this.http.get<Course[]>(environment.apiURL || 'http://localhost:3000');
  }
}