import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { StudentsComponent } from './students/students.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'stud', loadChildren: () => import( './student/student.module' ).then( m => m.StudentModule ) },
  { path: 'courses', loadChildren: () => import( './my-course/my-course.module' ).then( m => m.MyCourseModule ) },
  {
    path: 'student/add/:id',
    component: StudentsComponent
  },
  {
    path: 'student/edit/:id',
    component: StudentsComponent
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule( {
  imports: [ RouterModule.forRoot( routes ) ],
  exports: [ RouterModule ]
} )
export class AppRoutingModule { }