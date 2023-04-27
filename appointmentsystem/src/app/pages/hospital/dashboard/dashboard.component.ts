import { Component, Input, OnInit } from '@angular/core'
import {
  Chart,
  ChartType,
  ChartDataset,
  ChartOptions,
  ChartData
} from 'chart.js'

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
  public data: ChartData<ChartType, number[], string | string[]> = {
    labels: this.labels,
    datasets: [
      {
        data: [156, 19, 40]
      }
    ]
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
        const data: { [key: string]: number } = this.dummyData.reduce(
          (accumulator, value) => {
            // accumulator[value.appointmentDate] = (++accumulator[value.appointmentDate]|| 0) + 1;
            // console.log(prev)
            const appointmentDate = value.appointmentDate as keyof typeof accumulator
            accumulator[appointmentDate] =
              (accumulator[appointmentDate] || 0) + 1
            return accumulator
          },
          {} as { [key: string]: number }
        )
        this.data.labels = Object.keys(data)
        this.data.datasets.push( {data:Object.values(data)})
        this.showChart = true
        break
      case 'appointmentByDepartment':
        break
      case 'appointmentShareByDoctor':
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
      appointmentDate: '2023-04-27',
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
      appointmentDate: '2023-04-24',
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
        doctorId: 'D001',
        doctorFirstName: 'John',
        doctorContactNo: '555-1234'
      },
      diseaseId: null,
      appointmentDate: '2023-04-26',
      appointmentTime: '10:00 AM',
      appointmentStatus: 'scheduled'
    }
  ]
}
