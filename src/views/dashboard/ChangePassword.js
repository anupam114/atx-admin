import React from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
  CAlert
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked } from '@coreui/icons'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import Constants, { userToken } from 'src/Constants'

const ChangePassword = () => {

  const [error, setError] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmpassword, setConfirmPassword] = React.useState('');

  const handleChnagePassword = async(e) => {
    e.preventDefault();
    if (password !== confirmpassword) {
      setError("Password and Confirm Password not Matches"); return;
    } else {
      let url = Constants.changePassword;
      let response = await fetch(url, {
        method: 'POST',
        headers: {
            'Authorization': userToken(),
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ password: password })
    })
    let json = await response.json();
    if(json.status !== 200){
      setError(json.message); return;
    }
    const d = new Date();
    d.setTime(d.getTime() + (365*24*60*60*1000));
    document.cookie = `_token=${json._token};expires=${d.toUTCString()};path="/"`;
    toast.success("Password Changed Successfully");
    }
  }

  return (
    <>
      <ToastContainer
        position="top-right"
        theme="colored"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover />
      <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
        <CContainer>
          <CRow className="justify-content-center">
            <CCol md={9} lg={7} xl={6}>
              <CCard className="mx-4">
                <CCardBody className="p-4">
                  <CForm onSubmit={handleChnagePassword}>
                  {(error)?<CAlert color="danger">{error}</CAlert>:<></>}
                    <h5>Change Password</h5>
                    {/* <p className="text-medium-emphasis">Create your account</p> */}
                    <Link to='/' className='btn btn-primary m-2 float-end'>Back</Link>

                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        type="password"
                        placeholder="Password"
                        name="password"
                        onChange={(e) => setPassword(e.target.value)} />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        type="password"
                        placeholder="Confirm Password"
                        name="confirm-password"
                        onChange={(e) => setConfirmPassword(e.target.value)} />
                    </CInputGroup>
                    <div className="d-grid">
                      <CButton type='submit' color="success">Change Password</CButton>
                    </div>
                  </CForm>
                </CCardBody>
              </CCard>
            </CCol>
          </CRow>
        </CContainer>
      </div>
    </>
  )
}

export default ChangePassword
