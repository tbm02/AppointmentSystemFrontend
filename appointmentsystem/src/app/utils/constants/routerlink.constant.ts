export class RouterLinks {
  labelAndLinks!: {
    label: string
    link: string
    isdropdown?: boolean
  }[]
  static RoleLinks: {
    role: string
    links: {
      label: string
      link: string
      isdropdown?: boolean
    }[]
  }[] = [
    {
      role: 'Hospital',
      links: [
        {
          label: 'Home',
          link: '',
          isdropdown: false
        },
        {
          label: 'Doctors',
          link: 'doctor',
          isdropdown: false
        },
        {
          label: 'Appointments',
          link: 'appointment',
          isdropdown: false
        },
        {
          label: 'Dashhboard',
          link: 'dashboard',
          isdropdown: false
        },
        {
          label: 'Logout',
          link: '#',
          isdropdown: false
        }
      ]
    },
    {
      role: 'Doctor',
      links: [
        {
          label: 'Home',
          link: '#',
          isdropdown: false
        },
        {
          label: 'Appointments',
          link: '#',
          isdropdown: false
        },
        {
          label: 'Dashboard',
          link: '#',
          isdropdown: false
        },
        {
          label: 'Logout',
          link: '#',
          isdropdown: false
        }
      ]
    },
    {
      role: 'UnAuthorized',
      links: [
        {
          label: 'Home',
          link: '#',
          isdropdown: false
        },
        {
          label: 'Hospitals',
          link: '#',
          isdropdown: false
        },
        {
          label: 'About Us',
          link: '#',
          isdropdown: false
        },
        {
          label: 'Login/Register',
          link: '#',
          isdropdown: false
        },
        
      ],
      
    },
    
     
  ]
}
