import { Component, Input } from '@angular/core';
import { Appointment } from 'src/app/utils/dto/appointment.model';

@Component({
  selector: 'app-hospital-appointment-card',
  templateUrl: './appointment-card.component.html',
  styleUrls: ['./appointment-card.component.css']
})
export class AppointmentCardComponent {
@Input() appointment!:Appointment;


}
