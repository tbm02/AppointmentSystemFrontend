import { User } from "./user.model";

export interface Person{
  user:User,
  personId:string,
  firstName:string,
  lastName:string,
  dob:Date,
  address:string,
  gender:string,
  patients?:{
    patientId:string,
    patientFirstName?:string,
    patientLastName?:string,
    patientContactNo?:string
  }[]

}
