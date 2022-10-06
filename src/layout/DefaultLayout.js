import React from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContent, AppSidebar, AppFooter, AppHeader } from '../components/index'

const DefaultLayout = () => {
  const navigation = useNavigate()
  const cookie = React.useRef(document.cookie)
  React.useEffect(() => {
    if(!cookie.current.includes('_token=')) {
      navigation('/login')
    }
  }, [navigation])

  if(!cookie.current.includes('_token=')) {
    return <></>
  }
  return (
    <div>
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <AppHeader />
        <div className="body flex-grow-1 px-3">
          <AppContent />
        </div>
        <AppFooter />
      </div>
    </div>
  )
}

export default DefaultLayout
