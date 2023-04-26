import { Component, OnInit } from '@angular/core'
import { Doctor } from 'src/app/utils/dto/doctor.model'
import { Specialization } from 'src/app/utils/dto/specialization.model'
import { FilterObject } from 'src/app/utils/models/filterobject.model'

@Component({
  selector: 'app-hospital-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent implements OnInit {
  searchQuery!: string
  selectedSpecialization!: Specialization
  specializations: Specialization[] = [
    { specializationId: '1', specializationName: 'Neurologist' },
    { specializationId: '2', specializationName: 'Orthopadic' },
    { specializationId: '3', specializationName: 'Gynac' }
  ]
  filterfieldValues: FilterObject[] = [
    {
      field: 'specialization',
      values: ['Neurologist', 'Orthopadic', 'Gynac'],
      inclusive: true,
      filterKey: 'specializationName'
    },
    { field: 'gender', values: ['male', 'female'], inclusive: false }
  ]

  filterDoctors () {
    this.filteredDoctors = this.dummyDoctors.filter(doctor => {
      console.log(
        Object.values(this.specializations[0]).includes(
          this.selectedSpecialization.specializationId
        )
      )
      return Object.values(this.specializations[0]).includes(
        this.selectedSpecialization.specializationId
      )
    })
    console.log(this.filteredDoctors)
  }

  dummyDoctors: Doctor[] = [
    {
      user: {
        contactNo: '9494902102',
        email: 'virat@hospital.com',
        password: '2928',
        roleId: '2',
        userId: '1'
      },
      firstName: 'Jane',
      lastName: 'Doe',
      hospital: {
        hospitalId: '1',
        hospitalName: 'ABC Hospital'
      },
      gender: 'male',
      dob: new Date('1985-03-15'),
      recessStartTime: '12:00',
      recessEndTime: '13:00',
      startTime: '09:00',
      endTime: '17:00',
      slotDuration: '30',
      bufferTime: '10',
      specialization: [
        { specializationId: '1', specializationName: 'Neurologist' }
      ],

      imageLink: 'https://randomuser.me/api/portraits/men/1.jpg'
    },
    {
      user: {
        contactNo: '9494902102',
        email: 'virat@hospital.com',
        password: '2928',
        roleId: '2',
        userId: '1'
      },
      firstName: 'Jane',
      lastName: 'Doe',
      hospital: {
        hospitalId: '1',
        hospitalName: 'ABC Hospital'
      },
      gender: 'male',
      dob: new Date('1985-03-15'),
      recessStartTime: '12:00',
      recessEndTime: '13:00',
      startTime: '09:00',
      endTime: '17:00',
      slotDuration: '30',
      bufferTime: '10',
      specialization: [{ specializationId: '3', specializationName: 'Gynac' }],

      imageLink: 'https://randomuser.me/api/portraits/men/1.jpg'
    },
    {
      user: {
        contactNo: '9494902102',
        email: 'virat@hospital.com',
        password: '2928',
        roleId: '2',
        userId: '1'
      },
      firstName: 'Jane',
      lastName: 'Doe',
      hospital: {
        hospitalId: '1',
        hospitalName: 'ABC Hospital'
      },
      gender: 'male',
      dob: new Date('1985-03-15'),
      recessStartTime: '12:00',
      recessEndTime: '13:00',
      startTime: '09:00',
      endTime: '17:00',
      slotDuration: '30',
      bufferTime: '10',
      specialization: [
        { specializationId: '1', specializationName: 'Neurologist' }
      ],

      imageLink: 'https://randomuser.me/api/portraits/men/1.jpg'
    },
    {
      user: {
        contactNo: '9494902102',
        email: 'virat@hospital.com',
        password: '2928',
        roleId: '2',
        userId: '1'
      },
      firstName: 'Jane',
      lastName: 'Doe',
      hospital: {
        hospitalId: '1',
        hospitalName: 'ABC Hospital'
      },
      gender: 'male',
      dob: new Date('1985-03-15'),
      recessStartTime: '12:00',
      recessEndTime: '13:00',
      startTime: '09:00',
      endTime: '17:00',
      slotDuration: '30',
      bufferTime: '10',
      specialization: [
        { specializationId: '1', specializationName: 'Pediatrics' }
      ],

      imageLink: 'https://randomuser.me/api/portraits/men/1.jpg'
    },
    {
      user: {
        contactNo: '9494902102',
        email: 'virat@hospital.com',
        password: '2928',
        roleId: '2',
        userId: '1'
      },
      firstName: 'Jane',
      lastName: 'Doe',
      hospital: {
        hospitalId: '1',
        hospitalName: 'ABC Hospital'
      },
      gender: 'female',
      dob: new Date('1985-03-15'),
      recessStartTime: '12:00',
      recessEndTime: '13:00',
      startTime: '09:00',
      endTime: '17:00',
      slotDuration: '30',
      bufferTime: '10',
      specialization: [
        { specializationId: '1', specializationName: 'Pediatrics' }
      ],

      imageLink: 'https://randomuser.me/api/portraits/men/1.jpg'
    }
  ]
  filteredDoctors: Doctor[] = this.dummyDoctors
  ngOnInit (): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }
  applyFilter (filterParams: FilterObject[]) {
    const filteredDoctors = this.dummyDoctors.filter(doctor => {
      let isMatch = false
      for (let filterParam of filterParams) {
        const doctorValue = doctor[filterParam.field as keyof Doctor]

        if (filterParam.inclusive) {
          ;(doctorValue as any[]).forEach(value => {
            console.log('Searching for inclusive ness')
            isMatch =
              isMatch ||
              filterParam.values.includes(
                value[filterParam.filterKey as keyof Object]
              )
          })
        } else {
          if (filterParam.values.length) {
            
            console.log('Checking for the exact match')
            console.log(doctorValue)
            
          }
         }
      }
      console.log('Returning the is Match from here ', isMatch)
      return isMatch
    })

    this.filteredDoctors = filteredDoctors
  }
  filterByFields (filterParam: FilterObject) {}
}
