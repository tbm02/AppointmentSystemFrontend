import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../../pages/doctor/login/login.component';
import { DoctorRoutingModule } from './doctor-routing.module';
import { SignupComponent } from '../../pages/doctor/signup/signup.component';




@NgModule({
  declarations: [
    SignupComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    DoctorRoutingModule
  ]
})
export class DoctorModule { }
