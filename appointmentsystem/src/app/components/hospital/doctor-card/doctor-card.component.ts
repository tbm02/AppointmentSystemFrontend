import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HospitalHttpService } from 'src/app/services/hospital/hospital.http.service';
import { Doctor } from 'src/app/utils/dto/doctor.model';

@Component({
  selector: 'app-hospital-doctor-card',
  templateUrl: './doctor-card.component.html',
  styleUrls: ['./doctor-card.component.css']
})
export class DoctorCardComponent implements OnInit{


  @Input()doctor!:Doctor;
  @Output() viewProfile = new EventEmitter<Doctor>();
  specializations!: string[];
  constructor(private hospitalHttpService:HospitalHttpService){}
  ngOnInit(){
    this.specializations = this.doctor.specializations
  }
  handleClick(){
    this.viewProfile.emit(this.doctor)

}
}
