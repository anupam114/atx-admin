import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Constants from 'src/Constants'
import Logo from 'src/assets/images/atx-logo-back.png'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
  CAlert,
  CImage,
  CCallout
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'

const Login = () => {

  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState(null);
  const navigation = useNavigate()

  React.useEffect(() => {
    const { cookie } = document;
    if (cookie.includes('_token=')) {
      navigation('/dashboard')
    }
  }, [navigation])
  const handleLogin = async (e) => {
    e.preventDefault();
    let url = Constants.login;
    let body = { username, password }
    let res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': "application/json"
      },
      body: JSON.stringify(body)

    });

    let data = await res.json()
    // console.log(data)
    if (data.status !== 200) {
      setError(data.message); return;
    }
    const d = new Date();
    d.setTime(d.getTime() + (365 * 24 * 60 * 60 * 1000));
    document.cookie = `_token=${data._token};expires=${d.toUTCString()};path="/"`;
    navigation('/dashboard')




  }
  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={4}>
            <CCallout color="info" className="bg-white">
              New to <b>ATX Floods</b> ? <Link to="/info" target="_blank">Click here</Link> to know more.
            </CCallout>
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  {(error) ? <CAlert color="danger">{error}</CAlert> : <></>}
                  <CForm onSubmit={handleLogin}>
                    <CImage src={Logo} className="img-fluid"></CImage>
                    <p className="text-medium-emphasis">Login to start your session</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput placeholder="Username" autoComplete="username" value={username} onChange={(e) => setUsername(e.target.value)} required={true} />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        type="password"
                        placeholder="Password"
                        autoComplete="current-password"
                        value={password} onChange={(e) => setPassword(e.target.value)} required={true} />
                    </CInputGroup>
                    <CRow>
                      <CCol xs={6}>
                        <CButton type='submit' color="primary" className="px-4">
                          Login
                        </CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>

            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login
