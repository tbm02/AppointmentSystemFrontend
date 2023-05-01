import { Component, Input, OnInit } from '@angular/core'
import {
  ChartType,
  ChartData
} from 'chart.js'
import { HospitalHttpService } from 'src/app/services/hospital/hospital.http.service'
import { FormField } from 'src/app/utils/models/dynamicformfield.model'

@Component({
  selector: 'app-hospital-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  showChart = false
  public chartType: ChartType = 'line'
  public labels: string[] = ['BJP', 'AAP', 'INC']
  appointmentData!:any[]
  // public data:number[] = [156,4,19]
  public data: ChartData<ChartType, number[], string | string[]> ={
    datasets:[]
  }
  generateChart () {
    throw new Error('Method not implemented.')
  }
  constructor(private hospitalHttpService:HospitalHttpService){

  }
  // chartType!: string;
  ngOnInit (): void {
    this.hospitalHttpService.getAllAppointmentsForHospital().subscribe((res)=>{
      this.appointmentData = res.data
    })
  }
  handleChange (value: string) {
    switch (value) {
      case 'dailyAppointmentCount':
        this.chartType = 'line'
        let data: { [key: string]: number } = this.appointmentData.reduce(
          (accumulator, value) => {
            const appointmentDate = value.appointmentDate as keyof typeof accumulator
            accumulator[appointmentDate] =
              (accumulator[appointmentDate] || 0) + 1
              return accumulator
            },
          {} as { [key: string]: number }
          )
        this.data.labels = Object.keys(data)
        console.log(this.data.labels)
        this.data.datasets.push( {data:Object.values(data)})
        this.showChart = true
        break
      case 'appointmentByDepartment':
        break
      case 'appointmentShareByDoctor':
        this.chartType = 'pie'
        this.data.datasets.splice(0,this.data.datasets.length)
        console.log(this.appointmentData)
         let doctorData = this.appointmentData.reduce(
          (accumulator, value) => {
            const doctor = value.doctor.firstName as keyof typeof accumulator
            console.log(doctor)
            accumulator[doctor] =
                (accumulator[doctor] || 0) + 1
              return accumulator
            },
          {} as { [key: string]: number }
          )
        this.data.labels = Object.keys(doctorData)
        console.log(this.data.labels)
        this.data.datasets.push( {data:Object.values(doctorData)})
        this.showChart = true
        break
      default:
        break
    }
  }


  // formDetails:{title:string,fields:FormField[]} = {
  //   title:"Hospital Form",
  //   fields:[
  //     {
  //       name: 'firstName',
  //       label: 'First Name',
  //       type: 'text',

  //     },
  //     {
  //       name: 'lastName',
  //       label: 'Last Name',
  //       type: 'text',
  //     },
  //     {
  //       name: 'email',
  //       label: 'Email',
  //       type: 'email',
  //     }
  //   ]
  // }
}
