import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HospitalRoutingModule } from './hospital-routing.module';
import { HomePageComponent } from '../../pages/hospital/hospital-home-page/home-page.component';
import { AppModule } from '../../app.module';
import { HospitalSignUpComponent } from '../../pages/hospital/hospital-sign-up/hospital-sign-up.component';
import { HospitalLoginComponent } from '../../pages/hospital/hospital-login/hospital-login.component';
import { SharedModule } from '../../shared/shared.module';
import { DashboardComponent } from 'src/app/pages/hospital/dashboard/dashboard.component';
import { AppointmentsComponent } from 'src/app/pages/hospital/appointments/appointments.component';
import { DoctorsComponent } from 'src/app/pages/hospital/doctors/doctors.component';
import { DoctorCardComponent } from 'src/app/components/hospital/doctor-card/doctor-card.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HospitalSignUpComponent,
    HospitalLoginComponent,
    HomePageComponent,
    DashboardComponent,
    AppointmentsComponent,
    DoctorsComponent,
    DoctorCardComponent,
  ],
  imports: [
    CommonModule,
    HospitalRoutingModule,
    SharedModule,
    FormsModule,
    // AppModule
  ]
})
export class HospitalModule { }
