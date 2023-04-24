import { Disease } from "./disease.model"

export interface Diagnosis{
  diagnosisId:string,
  doctor:{
    doctorId:string,
    doctorFirstName:string,
    doctorContactNo:string,
    doctorLastName:string,

  },
  patient:{
    patientId:string,
    patientFirstName:string,
    patientLastName:string,
    patientContactNo:string
  },
  disease:Disease,
  remarks:string
}
