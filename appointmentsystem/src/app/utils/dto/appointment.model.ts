import { Time } from "@angular/common";
import { Diagnosis } from "./diagnosis.model";

export interface Appointment{
  appointmentId:string,
  patient:{
    patientId:string|number,
    patientFirstName:string,
    pateintContactNo:string
  },
  diagnosis?:Diagnosis,
  doctor:{
    doctorId:string|number,
    doctorFirstName:string,
    doctorContactNo:string
  },
  diseaseId?:string;
  appointmentDate:string,
  appointmentTime:string,
  appointmentStatus:string
}
