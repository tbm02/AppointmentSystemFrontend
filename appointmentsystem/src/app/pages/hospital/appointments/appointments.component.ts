import { Component, Input, OnInit } from '@angular/core'
import { Validators } from '@angular/forms'
import { DropdownQuestion } from 'src/app/components/shared/dynamic-field-component/dyanmic-field-question-text'
import { QuestionBase } from 'src/app/components/shared/dynamic-field-component/dynamic-field-questionbase'
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
      values: ["Pending","Cancel"],
      inclusive: false,
    }
  ]
  constructor(private hospitalHttpService:HospitalHttpService,private filterService:FilterService){}
  ngOnInit(): void {
    this.filteredAppointments =this.appointments
    this.hospitalHttpService.getAllAppointmentsForHospital().subscribe({
      next:(res)=>{
        console.log(res)
        this.appointments = res.data
        this.filteredAppointments = this.appointments
        this.filterService.registerValues(this.appointments,this.filterfieldValues)

      },error:(err)=>{
        console.log(err,"Error")

      },complete:()=>{

      }
    })
  }

  applyFilter (filterParams: FilterObject[]) {
    console.log("Event Occured",filterParams)
    this.filteredAppointments = this.filterService.applyFilter<Appointment>(this.appointments,filterParams)


    }

    questions:QuestionBase<string>[] = [
     new DropdownQuestion({
       key:'hospitalId',
       label:"Hospital",
        validations:[Validators.required],
        
      })
    ]
}
