import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DoctorModule } from './modules/doctor/doctor.module';
import { HospitalModule } from './modules/hospital/hospital.module';
import { LandingPageComponent } from './landing-page/landing-page.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserHomePageComponent } from './pages/user/user-home-page/user-home-page.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { SideboardComponent } from './components/shared/sideboard/sideboard.component';
import { SideBarComponent } from './components/shared/side-bar/side-bar.component';
import { SharedModule } from './shared/shared.module';
import { DoctorRoutingModule } from './modules/doctor/doctor-routing.module';
import { HospitalRoutingModule } from './modules/hospital/hospital-routing.module';
import { UserRoutingModule } from './modules/user/user-routing.module';
import { RouterModule } from '@angular/router';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
// import { MDBBootstrapModulesPro } from 'mdb-angular-ui-kit';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppointmentCardComponent } from './components/user/appointment-card/appointment-card.component';
import { DashboardCardComponent } from './components/shared/dashboard-card/dashboard-card.component';
// import { AppointmentComponent } from './pages/user/appointment/appointment.component';


@NgModule({
  declarations: [
    AppComponent,

    LandingPageComponent,
 





  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    AppRoutingModule,
    DoctorRoutingModule,
    HospitalRoutingModule,
    SharedModule,
    UserRoutingModule,
    NgbModule,
    MdbModalModule,
    BrowserAnimationsModule
    // MDBBootstrapModulesPro
    // UserModule

  ],
  exports:[

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
