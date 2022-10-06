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
    component: CNavItem,
    name: 'Closoures',
    to: '/closoures',
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

]

export default _nav
