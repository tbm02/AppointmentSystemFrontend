import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-shared-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css'],
})
export class SideBarComponent implements OnInit {
  isActive: boolean = false;
  linkChangeEvent:Event = new Event("linkChanged");
  @Input('role') role!: string;
  labelAndLinks!: {
    label: string;
    link: string;
    isdropdown?: boolean;
  }[];
  RoleLinks: {
    role: string;
    links: {
      label: string;
      link: string;
      isdropdown?: boolean;
    }[];
  }[] = [
    {
      role: 'Hospital',
      links: [
        {
          label: 'Home',
          link: '',
          isdropdown: false,
        },
        {
          label: 'Doctors',
          link: 'doctor',
          isdropdown: false,
        },
        {
          label: 'Appointments',
          link: 'appointment',
          isdropdown: false,
        },
        {
          label: 'Dashhboard',
          link: 'dashboard',
          isdropdown: false,
        },
        {
          label: 'Logout',
          link: '#',
          isdropdown: false,
        },
      ],
    },
    {
      role: 'Doctor',
      links: [
        {
          label: 'Home',
          link: '#',
          isdropdown: false,
        },
        {
          label: 'Appointments',
          link: '#',
          isdropdown: false,
        },
        {
          label: 'Dashboard',
          link: '#',
          isdropdown: false,
        },
        {
          label: 'Logout',
          link: '#',
          isdropdown: false,
        },
      ],
    },
    {
      role: 'User',
      links: [
        {
          label: 'Home',
          link: '#',
          isdropdown: false,
        },
        {
          label: 'Patients',
          link: '#',
          isdropdown: false,
        },
        {
          label: 'Appointments',
          link: '#',
          isdropdown: false,
        },
        {
          label: 'Dashboard',
          link: '#',
          isdropdown: false,
        },
      ],
    },
  ];
  toggleSidebar() {
    this.isActive = !this.isActive;
  }

  ngOnInit(): void {
    console.log('Hii I am reinitialized');
    this.labelAndLinks = this.RoleLinks.filter(collection=>collection.role===this.role)[0].links
  }
}
