import { Component, OnInit } from '@angular/core';
import { UserAppointmentService } from 'src/app/services/user/user-appointment.service';
import { Appointment } from 'src/app/utils/dto/appointment.model';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css'],
})
export class AppointmentsComponent implements OnInit {
  appointments!: Appointment[];
  constructor(private userAppointmentService: UserAppointmentService) {}
  ngOnInit(): void {
    this.userAppointmentService.getAllAppointmentsAUser().subscribe({
      next: (res) => {
        this.appointments = res.data;
        console.log(res);
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {},
    });
  }
}
