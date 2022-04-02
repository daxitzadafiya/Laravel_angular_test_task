import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { StudentsComponent } from './students/students.component';
import { AgGridModule } from 'ag-grid-angular';
import { StudentModule } from './student/student.module';
@NgModule( {
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    StudentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StudentModule,
    FormsModule,
    HttpClientModule, AgGridModule.withComponents( [] )
  ],
  providers: [ authInterceptorProviders ],
  bootstrap: [ AppComponent ]
} )
export class AppModule { }
