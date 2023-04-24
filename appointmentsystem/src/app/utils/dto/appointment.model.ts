import { Time } from "@angular/common";
import { Diagnosis } from "./diagnosis.model";

export interface Appointment{
  appointmentId:string,
  patientId:string,
  diagnosis:Diagnosis,
  doctorId:string,
  diseaseId?:string;
  appointmentDate:Date,
  appointmentTime:Time,
  appointmentStatus:string
}
