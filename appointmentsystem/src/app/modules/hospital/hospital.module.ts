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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppointmentCardComponent } from 'src/app/components/hospital/appointment-card/appointment-card.component';
import { NgChartsModule } from 'ng2-charts';



@NgModule({
  declarations: [
    HospitalSignUpComponent,
    HospitalLoginComponent,
    HomePageComponent,
    DashboardComponent,
    AppointmentsComponent,
    DoctorsComponent,
    DoctorCardComponent,
    AppointmentCardComponent
  ],
  imports: [
    CommonModule,
    HospitalRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    NgChartsModule
    // AppModule
  ]
})
export class HospitalModule { }
