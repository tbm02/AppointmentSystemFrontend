import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { URL } from "src/app/utils/constants/url.constant";
import { Patients } from "src/app/utils/dto/patients.model";

@Injectable(
  {
    providedIn:'root'
  }
)
export class UserPatientService{
  constructor(private httpClient:HttpClient){}
  getAllPatientsForAUser(){
    return this.httpClient.get<{statusCode:string,data:Patients[],mMssage:string}>(URL.PATIENT_END_POINT+"/person/1")
  }
  addNewPatient(){

  }
  deletePatient(){

  }updatePatient(){

  }
}
