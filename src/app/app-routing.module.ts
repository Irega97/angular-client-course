import { CourseFormComponent } from './course-form/course-form.component';
import { AuthGuard } from './guard/auth.guard';
import { AdminComponent } from './admin/admin.component';
import { AuthComponent } from './auth/auth.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';

//Especificar rutas de la app
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/courses' },
  { path: 'auth', component: AuthComponent},
  //canActivate para comprobar si esta logeado
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard]},
  { path: 'courses', component: CoursesComponent},
  { path: 'newCourse', component:CourseFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
