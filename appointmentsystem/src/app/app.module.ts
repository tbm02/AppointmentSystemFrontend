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
import { LineChartComponent } from './components/shared/line-chart/line-chart.component';
import { BarChartComponent } from './components/shared/bar-chart/bar-chart.component';

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
    UserRoutingModule
    // UserModule

  ],
  exports:[

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
