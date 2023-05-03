import { Component, Input, OnDestroy, OnInit } from '@angular/core'
import {
  ChartType,
  ChartData
} from 'chart.js'
import { HospitalHttpService } from 'src/app/services/hospital/hospital.http.service'
import { ChartService } from 'src/app/services/shared/chart.service'
import { Appointment } from 'src/app/utils/dto/appointment.model'
import { Hospital } from 'src/app/utils/dto/hospital.model'
import { FormField } from 'src/app/utils/models/dynamicformfield.model'

@Component({
  selector: 'app-hospital-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit,OnDestroy {
  showChart = false
  public chartType: ChartType = 'line'
  public labels: string[] = ['BJP', 'AAP', 'INC']
  appointmentData!:Appointment[]
  hospitalData!:Hospital
  appointmentStats:{completedAppointments:number,pendingAppointments:number,cancelledAppointments:number,totalAppointments:number}={
    cancelledAppointments:0,
    completedAppointments:0,
    pendingAppointments:0,
    totalAppointments:0
  }

  public data: ChartData<ChartType, number[], string | string[]> ={
    datasets:[]
  }
  generateChart () {
    throw new Error('Method not implemented.')
  }
  constructor(private hospitalHttpService:HospitalHttpService,private chartService:ChartService){

  }
  // chartType!: string;
  ngOnInit (): void {
    this.hospitalHttpService.getAllAppointmentsForHospital().subscribe((res)=>{
      this.appointmentData = res.data as Appointment[]
      this.appointmentStats.totalAppointments = res.data.length

      this.appointmentData.forEach(appointment=>{
       switch(appointment.status){
        case 'Cancelled':
          this.appointmentStats.cancelledAppointments = (this.appointmentStats.cancelledAppointments + 1) || 1
          break
          case 'Pending':
            this.appointmentStats.pendingAppointments = (this.appointmentStats.pendingAppointments + 1) || 1
            break
          case 'Completed':
              this.appointmentStats.completedAppointments = (this.appointmentStats.completedAppointments + 1) || 1
              break
          default:
            console.log(appointment.status)
            break
       }
      })
    })
    this.hospitalHttpService.getHospitalDetails().subscribe({
      next:(res)=>{
        console.log(res)
        this.hospitalData = res.data as Hospital

      },error:(err)=>{

      },complete:()=>{

      }
    })
  }
  ngOnDestroy(): void {

  }
  handleChange (value: string) {
    this.data.datasets.splice(0,this.data.datasets.length)
    switch (value) {
      case 'dailyAppointmentCount':
        this.chartType = 'line'

        this.chartService.populateChartWithData(this.data,this.appointmentData,"appointmentDate")
        this.showChart = true
        break
      case 'appointmentByDepartment':
        break
      case 'appointmentShareByDoctor':
        this.chartType = 'pie'
        this.chartService.populateChartWithData(this.data,this.appointmentData,"doctor.firstName")
        this.data.datasets.forEach((dataObj)=>{
          console.log(dataObj)
          // dataObj?.animation?.
          // dataObj.

        })
        this.showChart = true
        break
      default:
        break
    }
  }


}
