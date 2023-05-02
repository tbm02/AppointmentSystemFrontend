import { Component, OnInit } from '@angular/core';
import { UserPatientService } from 'src/app/services/user/user-patient.service';
import { Patients } from 'src/app/utils/dto/patients.model';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit{
  patients!:Patients[]

ngOnInit(): void {
this.userPatientService.getAllPatientsForAUser().subscribe({
  next:(res)=>{
    console.log(res)
    this.patients = res.data

  },error:(err)=>{

  },complete:()=>{

  }
})
}
constructor(private userPatientService:UserPatientService){}
}
