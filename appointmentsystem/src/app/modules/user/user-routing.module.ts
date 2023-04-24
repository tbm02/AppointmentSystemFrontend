import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from 'src/app/pages/hospital/hospital-home-page/home-page.component';
import { UserLoginComponent } from '../../pages/user/user-login/user-login.component';
import { UserSignUpComponent } from '../../pages/user/user-sign-up/user-sign-up.component';

const routes: Routes = [
  {
    path : "", component : HomePageComponent
  },
  {
    path : "signup", component : UserSignUpComponent
  },
  {
    path : "login", component : UserLoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
