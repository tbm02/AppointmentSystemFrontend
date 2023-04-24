import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from 'src/app/pages/hospital/hospital-home-page/home-page.component';
import { LoginComponent } from '../../pages/doctor/login/login.component';
import { SignupComponent } from '../../pages/doctor/signup/signup.component';

const routes: Routes = [
  {path : "", component : HomePageComponent},
  {path : "signup", component : SignupComponent},
  {path : "login", component : LoginComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorRoutingModule { }
