import { Component, Input, OnInit } from '@angular/core';
import { HospitalHttpService } from 'src/app/services/hospital/hospital.http.service';
import { Doctor } from 'src/app/utils/dto/doctor.model';

@Component({
  selector: 'app-hospital-doctor-card',
  templateUrl: './doctor-card.component.html',
  styleUrls: ['./doctor-card.component.css']
})
export class DoctorCardComponent implements OnInit{


  @Input()doctor!:Doctor;
  specializations!: string[];
  constructor(private hospitalHttpService:HospitalHttpService){}
  ngOnInit(){
    this.specializations = this.doctor.specializations
  }
  handleClick(){
    this.hospitalHttpService.getAllHospitals().subscribe((res)=>{
      console.log(res,"HERERERE")
    })
  
}
}
