import { Component, OnInit, ViewChild } from '@angular/core'
import { debounceTime, Subject, Subscription } from 'rxjs'
import { ModalComponent } from 'src/app/components/shared/modal/modal.component'
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal'
import { HospitalHttpService } from 'src/app/services/hospital/hospital.http.service'
import { FilterService } from 'src/app/services/shared/filter.service'
import { Doctor } from 'src/app/utils/dto/doctor.model'
import { Specialization } from 'src/app/utils/dto/specialization.model'
import { FilterObject } from 'src/app/utils/models/filterobject.model'
import { ModalConfig } from 'src/app/utils/models/modalconfig.model'
import { QuestionBase } from 'src/app/components/shared/dynamic-field-component/dynamic-field-questionbase'
import { TextboxQuestion } from 'src/app/components/shared/dynamic-field-component/dynamic-field-question-dropdown'
import { DropdownQuestion } from 'src/app/components/shared/dynamic-field-component/dyanmic-field-question-text'

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
  @ViewChild("modalRef")modalComponant!:ModalComponent
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
    { field: 'gender', values: [], inclusive: false }
  ]
  doctorData: Doctor[] = []
  subscription!: Subscription
  // modalRef: MdbModalRef<ModalComponent> | null = null;
  constructor (private hospitalHttpService: HospitalHttpService,private modalService: MdbModalService) {}
  filteredDoctors: Doctor[] = this.doctorData
  ngOnInit (): void {
    this.subscription = this.hospitalHttpService
      .getAllDoctorsForHospital()
      .subscribe({
        next: data => {
          console.log('Here We Have recieved data', data)
          this.doctorData = data.data
          let tempFilterObj!:FilterObject|undefined
          let tempArray = []
          this.filterfieldValues.forEach(({field,inclusive})=>{
            tempFilterObj = this.filterfieldValues?.find(obj=>obj.field === field);
            if(inclusive){
              this.doctorData.forEach((doctor)=>{
                (doctor[field as keyof Doctor] as string[]).forEach((value: any)=>{
                  if (!tempFilterObj?.values.includes(value)) {
                          tempFilterObj?.values.push(value)
                        }
                })

              })
            }else{
              this.doctorData.forEach((doctor)=>{

                if (!tempFilterObj?.values.includes(doctor[field as keyof Doctor])) {
                  tempFilterObj?.values.push(doctor[field as keyof Doctor])
                }
              })
            }
          })
          // data.data.forEach(doctor => {
          //   doctor.specializations.forEach(spcialization => {
          //     if (!this.filterfieldValues[0].values.includes(spcialization)) {
          //       this.filterfieldValues[0].values.push(spcialization)
          //     }
          //   })
          // })
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
    console.log("Hume Bulayta he")
    this.modalComponant.open()
  }


  closeModal(){
    console.log("HEres")
    // this.showAddDoctorForm = false
  }

  questions:QuestionBase<string>[] = [
   new TextboxQuestion({
      key:"firstName",
      label:"First Name",
      required:true,
      value:'',
      type:'text',


    }),
    new TextboxQuestion({
      key:"lastName",
      label:"Last Name",
      required:true,
      value:'',
      type:'text',

    }),
    new TextboxQuestion({
      key:"dob",
      label:"Date Of Birth",
      required:true,
      value:'',
      type:'date',

    }),
    new TextboxQuestion({
      key:"dob",
      label:"Date Of Birth",
      required:true,
      value:'',
      type:'date',

    }),new TextboxQuestion({
      key:"dob",
      label:"Date Of Birth",
      required:true,
      value:'',
      type:'date',

    }),new TextboxQuestion({
      key:"dob",
      label:"Date Of Birth",
      required:true,
      value:'',
      type:'date',

    }),new TextboxQuestion({
      key:"dob",
      label:"Date Of Birth",
      required:true,
      value:'',
      type:'date',

    }),new TextboxQuestion({
      key:"dob",
      label:"Date Of Birth",
      required:true,
      value:'',
      type:'date',

    }),
    new DropdownQuestion({
      key:"gender",
      label:"Gender",
      required:true,
      value:'',
      options:[
        {
          key:"gender",
          value:"Male"
        },
        {
          key:"gender",
          value:"Female"
        }
      ]

    }),

  ]
}
