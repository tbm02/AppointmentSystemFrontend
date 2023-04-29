import { Component, OnInit, ViewChild } from '@angular/core'
import { debounceTime, Subject, Subscription } from 'rxjs'
import { ModalComponent } from 'src/app/components/shared/modal/modal.component'
import { HospitalHttpService } from 'src/app/services/hospital/hospital.http.service'
import { FilterService } from 'src/app/services/shared/filter.service'
import { Doctor } from 'src/app/utils/dto/doctor.model'
import { Specialization } from 'src/app/utils/dto/specialization.model'
import { FilterObject } from 'src/app/utils/models/filterobject.model'
import { ModalConfig } from 'src/app/utils/models/modalconfig.model'

@Component({
  selector: 'app-hospital-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent implements OnInit {
  searchQuery!: string
  showAddDoctorForm!:boolean;
  private searchQuery$ = new Subject<string>()
  modalConfig:ModalConfig={modalTitle:"Doctor Form"}
  // @ViewChild("formModal")modalComponant:ModalComponent
  selectedSpecialization!: Specialization
  specializations: Specialization[] = [
    { specializationId: '1', specializationName: 'Neurologist' },
    { specializationId: '2', specializationName: 'Orthopadic' },
    { specializationId: '3', specializationName: 'Gynac' }
  ]
  filterfieldValues: FilterObject[] = [
    {
      field: 'specializations',
      values: [],
      inclusive: true
    },
    { field: 'gender', values: ['Male', 'Female'], inclusive: false }
  ]
  doctorData: Doctor[] = []
  subscription!: Subscription

  constructor (private hospitalHttpService: HospitalHttpService) {}
  filteredDoctors: Doctor[] = this.doctorData
  ngOnInit (): void {
    this.subscription = this.hospitalHttpService
      .getAllDoctorsForHospital()
      .subscribe({
        next: data => {
          console.log('Here We Have recieved data', data)
          this.doctorData = data.data
          data.data.forEach(doctor => {
            doctor.specializations.forEach(spcialization => {
              if (!this.filterfieldValues[0].values.includes(spcialization)) {
                this.filterfieldValues[0].values.push(spcialization)
              }
            })
          })
          this.filteredDoctors = this.doctorData
          console.log(this.doctorData)
        },
        error: err => {
          console.log('Error Occured', err)
        },
        complete () {
          console.log('COmpleted')
        }
      })
    // this.subscription().
      // this.modalComponant.open()
    // this.searchQuery$.pipe(debounceTime(400)).subscribe((searchQuery)=>{this.searchDoctorsByName(searchQuery)})
  }
  applyFilter (filterParams: FilterObject[]) {
    console.log(filterParams)
    this.filteredDoctors = FilterService.applyFilter<Doctor>(
      this.doctorData,
      filterParams
    )
  }
  filterByFields (filterParam: FilterObject) {}

  addDoctor () {
     }

  searchDoctorsByName (searchQuery: string) {
    // console.log("Attemping to Searcj",searchQuery)
    if (searchQuery.length <= 1) {
      this.filteredDoctors = this.doctorData
    }
    else if(searchQuery.length > 1 && this.filteredDoctors.length === 0){
      console.log("Will Save performance")
    }
    else {
      console.log("Searching")
      const lowerCaseSearchQuery = searchQuery.toLowerCase()
      this.filteredDoctors = this.doctorData.filter(
        doctor =>
          doctor.firstName.toLowerCase().includes(lowerCaseSearchQuery) ||
          doctor.lastName.toLowerCase().includes(lowerCaseSearchQuery) ||
          doctor.specializations.some(specialization =>
            specialization.toLowerCase().includes(lowerCaseSearchQuery)
          )
      )
    }
  }
  addNewDoctor(){
    this.showAddDoctorForm = true
 
  }
  closeModal(){
    console.log("HEres")
    this.showAddDoctorForm = false
  }
}
