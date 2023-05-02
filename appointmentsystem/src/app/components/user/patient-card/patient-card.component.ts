import { Component, Input } from '@angular/core';
import { Patients } from 'src/app/utils/dto/patients.model';

@Component({
  selector: 'app-user-patient-card',
  templateUrl: './patient-card.component.html',
  styleUrls: ['./patient-card.component.css']
})
export class PatientCardComponent {
@Input() patient!:Patients
}
