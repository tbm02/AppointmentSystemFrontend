import { Component, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { Validators } from '@angular/forms';
import { DropdownQuestion } from 'src/app/components/shared/dynamic-field-component/dyanmic-field-question-text';
import { QuestionBase } from 'src/app/components/shared/dynamic-field-component/dynamic-field-questionbase';
import { DynamicFormComponent } from 'src/app/components/shared/dynamic-form/dynamic-form.component';
import { ModalComponent } from 'src/app/components/shared/modal/modal.component';
import { UserAppointmentService } from 'src/app/services/user/user-appointment.service';
import { Appointment } from 'src/app/utils/dto/appointment.model';
import { Hospital } from 'src/app/utils/dto/hospital.model';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css'],
})
export class AppointmentsComponent implements OnInit,OnChanges {
  appointments!: Appointment[];
  hospitals:Hospital[] = []
  questions!:QuestionBase<string>[]
  renderForm = false
  @ViewChild("modalRef")modalComponant!:ModalComponent
  @ViewChild("addAppointmentForm")addAppointmentForm!:DynamicFormComponent
  constructor(private userAppointmentService: UserAppointmentService) {}

  ngOnInit(): void {
    this.userAppointmentService.getAllAppointmentsAUser().subscribe({
      next: (res) => {
        this.appointments = res.data;
        console.log(res);
        // this.addAppointmentForm.form.valueChanges.subscribe(()=>{
        //   // console.log("Changes")
        // })
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {},
    });


  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("Chamges")
    console.log(changes)
  }
  bookAppointment(){
    this.modalComponant.open()
    this.userAppointmentService.getAllHospitals().subscribe({
      next:(res)=>{
        this.hospitals = res.data
        console.log(this.hospitals)
        this.questions = [new DropdownQuestion({
          key:"hospitalId",
          label:"Hospital Name",
          validations:[Validators.required],
          options:this.hospitals.map(hospital=>{

            return {key:hospital.hospitalName,value:hospital.hospitalId}
          })

        })]
        this.renderForm = true
      },error:(err)=>{

      },
      complete:()=>{

      }
    })


  }
  submit(e:Event){
    console.log(this.addAppointmentForm.form)
  }
}
