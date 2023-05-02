import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { URL } from 'src/app/utils/constants/url.constant'
import { Appointment } from 'src/app/utils/dto/appointment.model'
import { Doctor } from 'src/app/utils/dto/doctor.model'
import { Hospital } from 'src/app/utils/dto/hospital.model'

@Injectable({ providedIn: 'root' })
export class HospitalHttpService {
  constructor (private http: HttpClient) {}
  getAllHospitals () {
    console.log(URL.HOSPITAL_END_POINT)
    return this.http.get(URL.HOSPITAL_END_POINT)
  }
  getHospitalDetails () {
    console.log(URL.HOSPITAL_END_POINT)
    return this.http.get<{statusCode:string,data:Hospital,mMssage:string}>(URL.HOSPITAL_END_POINT+"/1")
  }
  addNewHospital () {}
  getAllDoctorsForHospital () {
    return this.http.get<{statusCode:string,data:Doctor[],mMssage:string}>(URL.DOCTOR_END_POINT+"/hospital/1")
  }
  updateHospitalDetails () {}

  getAllAppointmentsForHospital (){

    return this.http.get<{statusCode:string,data:Appointment[],mMssage:string}>(URL.APPOINTMENT_END_POINT+"/hospital/1")
  }
}
