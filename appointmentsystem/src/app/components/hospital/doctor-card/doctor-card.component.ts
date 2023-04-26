import { Component, Input, OnInit } from '@angular/core';
import { Doctor } from 'src/app/utils/dto/doctor.model';

@Component({
  selector: 'app-hospital-doctor-card',
  templateUrl: './doctor-card.component.html',
  styleUrls: ['./doctor-card.component.css']
})
export class DoctorCardComponent implements OnInit{


  @Input()doctor!:Doctor;
  specializations!: string[];

  ngOnInit(){
    this.specializations = this.doctor.specialization.map(specialization=>specialization.specializationName)
  }

}
