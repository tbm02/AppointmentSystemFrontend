import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentsComponent } from 'src/app/pages/hospital/appointments/appointments.component';
import { DashboardComponent } from 'src/app/pages/hospital/dashboard/dashboard.component';
import { DoctorsComponent } from 'src/app/pages/hospital/doctors/doctors.component';
import { HomePageComponent } from '../../pages/hospital/hospital-home-page/home-page.component';
import { HospitalLoginComponent } from '../../pages/hospital/hospital-login/hospital-login.component';
import { HospitalSignUpComponent } from '../../pages/hospital/hospital-sign-up/hospital-sign-up.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    children: [
      {
        path: 'signup',
        component: HospitalSignUpComponent,
        outlet: 'hospital',
      },
      { path: 'login', component: HospitalLoginComponent },
      {
        path: 'doctor',
        component: DoctorsComponent,
      },
      {
        path: 'appointment',
        component: AppointmentsComponent,
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HospitalRoutingModule {}
