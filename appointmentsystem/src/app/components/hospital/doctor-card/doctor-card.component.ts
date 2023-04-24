import { Component, Input } from '@angular/core';
import { Doctor } from 'src/app/utils/dto/doctor.model';

@Component({
  selector: 'app-hospital-doctor-card',
  templateUrl: './doctor-card.component.html',
  styleUrls: ['./doctor-card.component.css']
})
export class DoctorCardComponent {


  @Input()doctor!:Doctor;
}
