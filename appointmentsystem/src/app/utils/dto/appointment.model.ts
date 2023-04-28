import { Time } from "@angular/common";
import { Diagnosis } from "./diagnosis.model";

export interface Appointment{
  appointmentId:string,
  patient:{
    patientId:string|number,
    firstName:string,
    lastName:string,
    contactNo:string
  },
  diagnosis?:Diagnosis,
  doctor:{
    doctorId:string|number,
    firstName:string,
    lastName:string,
    contactNo:string
  },
  diseaseId?:string;
  appointmentDate:string,
  appointmentTime:string,
  status:string
}
