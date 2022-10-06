import React from 'react'
import { CFooter } from '@coreui/react'
import { Link } from 'react-router-dom'

const AppFooter = () => {
  return (
    <CFooter>
      <div>
        <Link to="/">ATX Floods</Link>
        <span className="ms-1">&copy; 2022.</span>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
