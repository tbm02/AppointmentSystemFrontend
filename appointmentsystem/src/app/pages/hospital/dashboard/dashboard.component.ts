import { Component, Input, OnInit } from '@angular/core'
import {
  ChartType,
  ChartData
} from 'chart.js'
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
  // public data:number[] = [156,4,19]
  public data: ChartData<ChartType, number[], string | string[]> ={
    datasets:[]
  }
  generateChart () {
    throw new Error('Method not implemented.')
  }
  // chartType!: string;
  ngOnInit (): void {}
  handleChange (value: string) {
    switch (value) {
      case 'dailyAppointmentCount':
        this.chartType = 'line'
        let data: { [key: string]: number } = this.dummyData.reduce(
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
         let doctorData = this.dummyData.reduce(
          (accumulator, value) => {
            const doctor = value.doctor.doctorFirstName as keyof typeof accumulator
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

  dummyData = [
    {
      appointmentId: 'A001',
      patient: {
        patientId: 'P002',
        patientFirstName: 'Bob',
        pateintContactNo: '555-2222'
      },
      diagnosis: null,
      doctor: {
        doctorId: 'D002',
        doctorFirstName: 'Jane',
        doctorContactNo: '555-5678'
      },
      diseaseId: null,
      appointmentDate: '2023-04-28',
      appointmentTime: '10:00 AM',
      appointmentStatus: 'scheduled'
    },
    {
      appointmentId: 'A002',
      patient: {
        patientId: 'P001',
        patientFirstName: 'Alice',
        pateintContactNo: '555-1111'
      },
      diagnosis: null,
      doctor: {
        doctorId: 'D002',
        doctorFirstName: 'Jane',
        doctorContactNo: '555-5678'
      },
      diseaseId: null,
      appointmentDate: '2023-04-25',
      appointmentTime: '10:00 AM',
      appointmentStatus: 'confirmed'
    },
    {
      appointmentId: 'A003',
      patient: {
        patientId: 'P002',
        patientFirstName: 'Bob',
        pateintContactNo: '555-2222'
      },
      diagnosis: null,
      doctor: {
        doctorId: 'D002',
        doctorFirstName: 'Jane',
        doctorContactNo: '555-5678'
      },
      diseaseId: null,
      appointmentDate: '2023-04-25',
      appointmentTime: '10:00 AM',
      appointmentStatus: 'scheduled'
    },
    {
      appointmentId: 'A004',
      patient: {
        patientId: 'P001',
        patientFirstName: 'Alice',
        pateintContactNo: '555-1111'
      },
      diagnosis: null,
      doctor: {
        doctorId: 'D001',
        doctorFirstName: 'John',
        doctorContactNo: '555-1234'
      },
      diseaseId: null,
      appointmentDate: '2023-04-25',
      appointmentTime: '10:00 AM',
      appointmentStatus: 'cancelled'
    },
    {
      appointmentId: 'A005',
      patient: {
        patientId: 'P002',
        patientFirstName: 'Bob',
        pateintContactNo: '555-2222'
      },
      diagnosis: null,
      doctor: {
        doctorId: 'D002',
        doctorFirstName: 'Jane',
        doctorContactNo: '555-5678'
      },
      diseaseId: null,
      appointmentDate: '2023-04-29',
      appointmentTime: '10:00 AM',
      appointmentStatus: 'scheduled'
    },
    {
      appointmentId: 'A006',
      patient: {
        patientId: 'P001',
        patientFirstName: 'Alice',
        pateintContactNo: '555-1111'
      },
      diagnosis: null,
      doctor: {
        doctorId: 'D004',
        doctorFirstName: 'Rohit',
        doctorContactNo: '555-1234'
      },
      diseaseId: null,
      appointmentDate: '2023-04-26',
      appointmentTime: '10:00 AM',
      appointmentStatus: 'scheduled'
    }
  ]

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
