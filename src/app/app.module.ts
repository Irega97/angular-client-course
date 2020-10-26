import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//rutas
import { AppRoutingModule } from './app-routing.module';

//servicio
import { HttpClientModule } from '@angular/common/http';

//componentes
import { AppComponent } from './app.component';
import { CourseCardComponent } from './course-card/course-card.component';
import { CoursesComponent } from './courses/courses.component';
import { AuthComponent } from './auth/auth.component';
import { AdminComponent } from './admin/admin.component';
import { CourseFormComponent } from './course-form/course-form.component';

//formulario reactivo
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    CourseCardComponent,
    CoursesComponent,
    AuthComponent,
    AdminComponent,
    CourseFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
