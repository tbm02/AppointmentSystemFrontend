import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from 'src/app/pages/hospital/hospital-home-page/home-page.component';
import { AppointmentsComponent } from 'src/app/pages/user/appointments/appointments.component';
import { DashboardComponent } from 'src/app/pages/user/dashboard/dashboard.component';
import { PatientsComponent } from 'src/app/pages/user/patients/patients.component';
import { ProfileComponent } from 'src/app/pages/user/profile/profile.component';
import { UserHomePageComponent } from 'src/app/pages/user/user-home-page/user-home-page.component';
import { UserLoginComponent } from '../../pages/user/user-login/user-login.component';
import { UserSignUpComponent } from '../../pages/user/user-sign-up/user-sign-up.component';

const routes: Routes = [
  {
    path : "", component : UserHomePageComponent,
    children:[
      {
        path : "patient", component : PatientsComponent
      },{
        path : "dashboard", component : DashboardComponent
      },{
        path : "appointment", component : AppointmentsComponent
      },{
        path : "profile", component : ProfileComponent
      },
    ]
  },
  {
    path : "signup", component : UserSignUpComponent
  },
  {
    path : "login", component : UserLoginComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
