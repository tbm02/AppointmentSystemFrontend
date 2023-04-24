import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SideboardComponent } from '../../components/shared/sideboard/sideboard.component';
import { UserSignUpComponent } from '../../pages/user/user-sign-up/user-sign-up.component';
import { UserLoginComponent } from '../../pages/user/user-login/user-login.component';


@NgModule({
  declarations: [
    UserSignUpComponent,
    UserLoginComponent,
    SideboardComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule
  ]
})
export class UserModule { }
