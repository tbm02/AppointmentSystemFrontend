import { Time } from "@angular/common";
import { Specialization } from "./specialization.model";
import { User } from "./user.model";

export interface Doctor{
  doctorId?:string,
  user:User,
  firstName:string,
  lastName:string,
  hospital:{
    hospitalId:string,
    hospitalName:string,
  },
  gender:string,
  dob:Date,
  recessStartTime:string,
  recessEndTime:string,
  startTime:string,
  endTime:string,
  slotDuration:string,
  bufferTime:string,
  specializations:string[],
  imageLink:string
}
