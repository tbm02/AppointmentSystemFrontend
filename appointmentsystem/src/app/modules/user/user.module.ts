import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SideboardComponent } from '../../components/shared/sideboard/sideboard.component';
import { UserSignUpComponent } from '../../pages/user/user-sign-up/user-sign-up.component';
import { UserLoginComponent } from '../../pages/user/user-login/user-login.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { NgChartsModule } from 'ng2-charts';
import { UserHomePageComponent } from 'src/app/pages/user/user-home-page/user-home-page.component';
import { PatientsComponent } from 'src/app/pages/user/patients/patients.component';
import { ProfileComponent } from 'src/app/pages/user/profile/profile.component';
import { AppointmentsComponent } from 'src/app/pages/user/appointments/appointments.component';
import { DashboardComponent } from 'src/app/pages/user/dashboard/dashboard.component';
import { PatientCardComponent } from 'src/app/components/user/patient-card/patient-card.component';
import { AppointmentCardComponent } from 'src/app/components/user/appointment-card/appointment-card.component';


@NgModule({
  declarations: [
    UserSignUpComponent,
    UserLoginComponent,
    SideboardComponent,
    UserHomePageComponent,
    PatientsComponent,
     ProfileComponent,
     AppointmentsComponent,
     DashboardComponent,
     PatientCardComponent,
     AppointmentCardComponent

  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule,
    FormsModule,
    NgChartsModule
  ]
})
export class UserModule { }
