import { Component, OnInit } from '@angular/core';
import { Doctor } from 'src/app/utils/dto/doctor.model';
import { Specialization } from 'src/app/utils/dto/specialization.model';
import { FilterObject } from 'src/app/utils/models/filterobject.model';

@Component({
  selector: 'app-hospital-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css'],
})
export class DoctorsComponent implements OnInit{
  searchQuery!: string;
  selectedSpecialization!: Specialization;
  specializations: Specialization[] = [
    { specializationId: '1', specializationName: 'Pediatrics' },
  ];
  filterfieldValues: FilterObject[] = [
    {
      field: 'specializations',
      values: ['Neurologist', 'Orthopadic', 'Gynac'],
      inclusive:true

    },
    { field: 'gender', values: ['Male', 'Female'] ,inclusive:false},

  ];

  filterDoctors() {
    this.filteredDoctors = this.dummyDoctors.filter((doctor) => {
      console.log(
        Object.values(this.specializations[0]).includes(
          this.selectedSpecialization.specializationId
        )
      );
      return Object.values(this.specializations[0]).includes(
        this.selectedSpecialization.specializationId
      );
    });
    console.log(this.filteredDoctors);
  }

  dummyDoctors: Doctor[] = [
    {
      user: {
        contactNo: '9494902102',
        email: 'virat@hospital.com',
        password: '2928',
        roleId: '2',
        userId: '1',
      },
      firstName: 'Jane',
      lastName: 'Doe',
      hospital: {
        hospitalId: '1',
        hospitalName: 'ABC Hospital',
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
        { specializationId: '1', specializationName: 'Pediatrics' },
      ],

      imageLink: 'https://randomuser.me/api/portraits/men/1.jpg',
    },
    {
      user: {
        contactNo: '9494902102',
        email: 'virat@hospital.com',
        password: '2928',
        roleId: '2',
        userId: '1',
      },
      firstName: 'Jane',
      lastName: 'Doe',
      hospital: {
        hospitalId: '1',
        hospitalName: 'ABC Hospital',
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
        { specializationId: '1', specializationName: 'Pediatrics' },
      ],

      imageLink: 'https://randomuser.me/api/portraits/men/1.jpg',
    },
    {
      user: {
        contactNo: '9494902102',
        email: 'virat@hospital.com',
        password: '2928',
        roleId: '2',
        userId: '1',
      },
      firstName: 'Jane',
      lastName: 'Doe',
      hospital: {
        hospitalId: '1',
        hospitalName: 'ABC Hospital',
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
        { specializationId: '1', specializationName: 'Pediatrics' },
      ],

      imageLink: 'https://randomuser.me/api/portraits/men/1.jpg',
    },
    {
      user: {
        contactNo: '9494902102',
        email: 'virat@hospital.com',
        password: '2928',
        roleId: '2',
        userId: '1',
      },
      firstName: 'Jane',
      lastName: 'Doe',
      hospital: {
        hospitalId: '1',
        hospitalName: 'ABC Hospital',
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
        { specializationId: '1', specializationName: 'Pediatrics' },
      ],

      imageLink: 'https://randomuser.me/api/portraits/men/1.jpg',
    },
    {
      user: {
        contactNo: '9494902102',
        email: 'virat@hospital.com',
        password: '2928',
        roleId: '2',
        userId: '1',
      },
      firstName: 'Jane',
      lastName: 'Doe',
      hospital: {
        hospitalId: '1',
        hospitalName: 'ABC Hospital',
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
        { specializationId: '1', specializationName: 'Pediatrics' },
      ],

      imageLink: 'https://randomuser.me/api/portraits/men/1.jpg',
    },
  ];
  filteredDoctors: Doctor[] = this.dummyDoctors;
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

  }
  applyFilter(filterParams:FilterObject[]) {
    const filteredDoctors = this.dummyDoctors.filter(doctor => {
      // Check if the doctor matches all selected filter parameters
      for (const filterParam of filterParams) {
        const doctorFieldValue = doctor[filterParam.field];
        const filterParamValues = filterParam.values;

        // Check if the field is included in the doctor object
        if (doctorFieldValue === undefined) {
          return false;
        }

        // Check if the field value matches the filter parameter
        const isMatch = filterParam.inclusive
          ? filterParamValues.includes(doctorFieldValue)
          : filterParamValues.some(filterValue => filterValue === doctorFieldValue);

        if (!isMatch) {
          return false; // If the doctor doesn't match, return false and continue with the next filter parameter
        }
      }

      // If the doctor matches all selected filter parameters, return true and include the doctor in the filtered list
      return true;
    });

    this.filteredDoctors = filteredDoctors;

  }
  filterByFields(filterParam:FilterObject){

    // this.filterDoctors = this.filterDoctors

  }
}
