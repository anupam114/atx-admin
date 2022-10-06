import React from 'react'
import {
  CDropdown,
  CDropdownDivider,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from '@coreui/react'
import {cilLockLocked, cilAccountLogout, cilUser} from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import { useNavigate } from 'react-router-dom'

const AppHeaderDropdown = () => {
  const navigation = useNavigate();


  const handleLogout = (e) => {
    e.preventDefault()
    document.cookie = `_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path="/";max-age=0;`;
    navigation('/login');
  }

  const changePassword = (e) => {
    e.preventDefault()
    navigation('/change-password');
  }




  return (
    <CDropdown variant="nav-item">
      <CDropdownToggle placement="bottom-end" className="py-0" caret={false}>
        {/* <CAvatar src={avatar8} size="md" /> */}
        Administrator <CIcon icon={cilUser} className="me-2"/>
      </CDropdownToggle>
      <CDropdownMenu className="pt-0" placement="bottom-end">
        <CDropdownDivider />
        <CDropdownItem href="#/change-password">
          <CIcon icon={cilLockLocked} className="me-2" />
          Change Password
        </CDropdownItem>
        <CDropdownItem href="#" onClick={handleLogout}>
          <CIcon icon={cilAccountLogout} className="me-2" onClick={handleLogout}/>
          Logout
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  )
}

export default AppHeaderDropdown
