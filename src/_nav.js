import React from 'react'
import CIcon from '@coreui/icons-react'
import {cilSpeedometer, cilBike, cilCamera, cilXCircle} from '@coreui/icons'
import {CNavItem,CNavGroup} from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    badge: {
      color: 'info',
    },
  },
  {
    component: CNavItem,
    name: 'Crossings',
    to: '/crossings',
    icon: <CIcon icon={cilBike} customClassName="nav-icon" />,
    badge: {
      color: 'info',
    },
  },

  {
    component: CNavGroup,
    name: 'Crossings Tools & Data',
    to: '/base',
    icon: <CIcon icon={cilCamera} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Add Crossing Data',
        to: '/crossings/add',
      },
      {
        component: CNavItem,
        name: 'Import Crossing Data',
        to: '/import-crossing',
      },
    ],
  },

  {
    component: CNavItem,
    name: 'Closures',
    to: '/closures',
    icon: <CIcon icon={cilXCircle} customClassName="nav-icon" />,
    badge: {
      color: 'info',
    },
  },

  // {
  //   component: CNavItem,
  //   name: 'Cameras',
  //   to: '/cameras',
  //   icon: <CIcon icon={cilCamera} customClassName="nav-icon" />,
  //   badge: {
  //     color: 'info',
  //   },
  // },

  {
    component: CNavGroup,
    name: 'Camera Dashboard',
    to: '/base',
    icon: <CIcon icon={cilCamera} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Cameras',
        to: '/cameras',
      },
      {
        component: CNavItem,
        name: 'Camera Feed',
        to: 'camera-feed',
      },
    ],
  },

  {
    component: CNavItem,
    name: 'Contacts',
    to: '/contact/view',
    icon: <CIcon icon={cilBike} customClassName="nav-icon" />,
    badge: {
      color: 'info',
    },
  },

  {
    component: CNavGroup,
    name: 'User Guide',
    to: '/base',
    icon: <CIcon icon={cilCamera} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'How It Works',
        to: '/how-it-works',
      },

      {
        component: CNavItem,
        name: 'Privacy Policy',
        to: '/privacy-policy',
      },

      {
        component: CNavItem,
        name: 'Terms & Conditions',
        to: '/terms-conditions',
      },
    ]
  },

]

export default _nav
