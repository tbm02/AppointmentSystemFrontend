import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { URL } from "src/app/utils/constants/url.constant";
import { Appointment } from "src/app/utils/dto/appointment.model";
import { Hospital } from "src/app/utils/dto/hospital.model";
import { Patients } from "src/app/utils/dto/patients.model";

@Injectable(
  {
    providedIn:'root'
  }
)
export class UserAppointmentService{
  constructor(private httpClient:HttpClient){}
  getAllAppointmentsAUser(){
    console.log(URL.APPOINTMENT_END_POINT+"/query?patient.person.personId=2")
    return this.httpClient.get<{statusCode:string,data:Appointment[],mMssage:string}>(URL.APPOINTMENT_END_POINT+"/query?patient.person.personId=1")
  }
  addNewPatient(){

  }
  deletePatient(){

  }updatePatient(){

  }
  getAllHospitals(){
    return this.httpClient.get<{statusCode:string,data:Hospital[],mMssage:string}>(URL.HOSPITAL_END_POINT)

  }
}
