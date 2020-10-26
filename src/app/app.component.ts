import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';
import { Component } from '@angular/core';
import { COURSES } from '../db-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //Lee los cursos de db-data.ts
  //courses: Course[] = COURSES;

  //ponemos authservice public para usar los metodos desde el html
  constructor(public authService: AuthService, private router: Router){}

  login(){
    this.router.navigateByUrl('/auth');
  }

  logout(){
    this.authService.logOut();
    this.router.navigateByUrl('/courses');
  }

  admin(){
    this.router.navigateByUrl('/admin');
  }
}
