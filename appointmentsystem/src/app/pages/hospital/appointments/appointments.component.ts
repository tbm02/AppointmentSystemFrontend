import { Component, Input } from '@angular/core'
import { FilterService } from 'src/app/services/user/shared/filter.service'
import { Appointment } from 'src/app/utils/dto/appointment.model'
import { FilterObject } from 'src/app/utils/models/filterobject.model'

@Component({
  selector: 'app-hospital-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent {

  @Input()searchQuery!:string
  filterfieldValues: FilterObject[] = [
    {
      field: 'appointmentStatus',
      values: ['Pending', 'Completed', 'Cancelled'],
      inclusive: false,
    }
  ]

  dummyAppointments: Appointment[] = [
    {
      appointmentId: '1',
      appointmentDate: '2022-10-12',
      appointmentTime: '16:00:00',
      doctor: {
        doctorId: 1,
        doctorFirstName: 'Virat Kohli',
        doctorContactNo: '9933828992'
      },
      patient: {
        patientId: 2,
        pateintContactNo: '9949499022',
        patientFirstName: 'Aaja'
      },
      appointmentStatus: 'Pending'
    },
    {
      appointmentId: '1',
      appointmentDate: '2022-10-12',
      appointmentTime: '16:00:00',
      doctor: {
        doctorId: 1,
        doctorFirstName: 'Virat Kohli',
        doctorContactNo: '9933828992'
      },
      patient: {
        patientId: 2,
        pateintContactNo: '9949499022',
        patientFirstName: 'Aaja'
      },
      appointmentStatus: 'Pending'
    },
    {
      appointmentId: '5',
      appointmentDate: '2022-10-11',
      appointmentTime: '14:00:00',
      doctor: {
        doctorId: 1,
        doctorFirstName: 'Virat Kohli',
        doctorContactNo: '9933828992'
      },
      patient: {
        patientId: 2,
        pateintContactNo: '9949499022',
        patientFirstName: 'Raja'
      },
      appointmentStatus: 'Completed'
    },
    {
      appointmentId: '3',
      appointmentDate: '2022-10-12',
      appointmentTime: '16:00:00',
      doctor: {
        doctorId: 1,
        doctorFirstName: 'Virat ',
        doctorContactNo: '9933828992'
      },
      patient: {
        patientId: 2,
        pateintContactNo: '9949499022',
        patientFirstName: 'Aaja'
      },
      appointmentStatus: 'Pending'
    }
  ]
  filteredAppointments:Appointment[]=this.dummyAppointments
  applyFilter (filterParams: FilterObject[]) {
    console.log("Event Occured",filterParams)
    this.filteredAppointments = FilterService.applyFilter<Appointment>(this.dummyAppointments,filterParams)
    
    
    }


}
