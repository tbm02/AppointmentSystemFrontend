import { Component, Input, OnInit } from '@angular/core'
import { HospitalHttpService } from 'src/app/services/hospital/hospital.http.service'
import { FilterService } from 'src/app/services/shared/filter.service'
import { Appointment } from 'src/app/utils/dto/appointment.model'
import { FilterObject } from 'src/app/utils/models/filterobject.model'

@Component({
  selector: 'app-hospital-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent implements OnInit{

  @Input()searchQuery!:string
  appointments:Appointment[] = []
  filteredAppointments:Appointment[] = []
  filterfieldValues: FilterObject[] = [
    {
      field: 'status',
      values: ['Pending', 'Completed', 'Cancelled'],
      inclusive: false,
    }
  ]
  constructor(private hospitalHttpService:HospitalHttpService){}
  ngOnInit(): void {
    this.filteredAppointments =this.appointments
    this.hospitalHttpService.getAllAppointmentsForHospital().subscribe({
      next:(res)=>{
        console.log(res)
        this.appointments = res.data
        this.filteredAppointments = this.appointments

      },error:(err)=>{
        console.log(err,"Error")

      },complete:()=>{

      }
    })
  }
  
  applyFilter (filterParams: FilterObject[]) {
    console.log("Event Occured",filterParams)
    this.filteredAppointments = FilterService.applyFilter<Appointment>(this.appointments,filterParams)
    
    
    }


}
