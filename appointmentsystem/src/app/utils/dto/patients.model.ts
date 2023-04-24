export interface Patients{
  patientId:string,
  firstName:string,
  lastName:string,
  dob:Date,
  email:string,
  person:{
    personId:string,
    firstName:string,
    lastName:string,
    contactNo:string
  }
}
