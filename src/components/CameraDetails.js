import React from "react"
import { CRow, CCol, CCard, CCardBody } from "@coreui/react";
import { Link } from "react-router-dom";
import Constants, { userToken } from "src/Constants";
const CameraDetails = () => {
    return (
        <>
            <CCard className="my-2">
                <CCardBody>
                    <div className="row">
                        <div className="col-md-6">
                            <h5>Camera Id: 123456789</h5>
                            <h5>Location: E. 45th Street at Waller Creek</h5>
                        </div>
                        <div className="col-md-6">
                        <h5 className="float-end">Last Updated: 12/02/2022</h5>
                        </div>
                    </div>
                </CCardBody>
            </CCard>
            <CRow>
            <CCol xs={6} >
                    <CCard>
                        <CCardBody className="camera-feed">
                        <p className="float-start">Temparature: 95<span>&#176;</span>F</p>
                        <p className="float-end">Captured: 12/02/2022</p>
                        <a className="link-dark m-2" href="http://34.207.149.114/uploads/99ada74b-84c2-4ca1-9019-c186408dcd3d-original.jpg" download="" target="_blank" rel="noreferrer"> <img className="img-fluid" src="https://photos-legacy.beholderhq.com/v3/photos/9803b71e-e740-4c1f-a01d-54b48fad8768-original.jpg" alt="cam-ih" /></a>
                        </CCardBody>
                    </CCard>
                </CCol>
                <CCol xs={6} >
                    <CCard>
                        <CCardBody className="camera-feed">
                        <p className="float-start">Temparature: 95<span>&#176;</span>F</p>
                        <p className="float-end">Captured: 12/02/2022</p>
                        <a className="link-dark m-2" href="http://34.207.149.114/uploads/99ada74b-84c2-4ca1-9019-c186408dcd3d-original.jpg" download="" target="_blank" rel="noreferrer"> <img className="img-fluid" src="https://photos-legacy.beholderhq.com/v3/photos/9803b71e-e740-4c1f-a01d-54b48fad8768-original.jpg" alt="cam-ih" /></a>
                        </CCardBody>
                    </CCard>
                </CCol>
                <CCol xs={6} >
                    <CCard>
                        <CCardBody className="camera-feed">
                        <p className="float-start">Temparature: 95<span>&#176;</span>F</p>
                        <p className="float-end">Captured: 12/02/2022</p>
                        <a className="link-dark m-2" href="http://34.207.149.114/uploads/99ada74b-84c2-4ca1-9019-c186408dcd3d-original.jpg" download="" target="_blank" rel="noreferrer"> <img className="img-fluid" src="https://photos-legacy.beholderhq.com/v3/photos/9803b71e-e740-4c1f-a01d-54b48fad8768-original.jpg" alt="cam-ih" /></a>
                        </CCardBody>
                    </CCard>
                </CCol>
                <CCol xs={6} >
                    <CCard>
                        <CCardBody className="camera-feed">
                        <p className="float-start">Temparature: 95<span>&#176;</span>F</p>
                        <p className="float-end">Captured: 12/02/2022</p>
                        <a className="link-dark m-2" href="http://34.207.149.114/uploads/99ada74b-84c2-4ca1-9019-c186408dcd3d-original.jpg" download="" target="_blank" rel="noreferrer"> <img className="img-fluid" src="https://photos-legacy.beholderhq.com/v3/photos/9803b71e-e740-4c1f-a01d-54b48fad8768-original.jpg" alt="cam-ih" /></a>
                        </CCardBody>
                    </CCard>
                </CCol>
                <CCol xs={6} >
                    <CCard>
                        <CCardBody className="camera-feed">
                        <p className="float-start">Temparature: 95<span>&#176;</span>F</p>
                        <p className="float-end">Captured: 12/02/2022</p>
                        <a className="link-dark m-2" href="http://34.207.149.114/uploads/99ada74b-84c2-4ca1-9019-c186408dcd3d-original.jpg" download="" target="_blank" rel="noreferrer"> <img className="img-fluid" src="https://photos-legacy.beholderhq.com/v3/photos/9803b71e-e740-4c1f-a01d-54b48fad8768-original.jpg" alt="cam-ih" /></a>
                        </CCardBody>
                    </CCard>
                </CCol>
                <CCol xs={6} >
                    <CCard>
                        <CCardBody className="camera-feed">
                        <p className="float-start">Temparature: 95<span>&#176;</span>F</p>
                        <p className="float-end">Captured: 12/02/2022</p>
                        <a className="link-dark m-2" href="http://34.207.149.114/uploads/99ada74b-84c2-4ca1-9019-c186408dcd3d-original.jpg" download="" target="_blank" rel="noreferrer"> <img className="img-fluid" src="https://photos-legacy.beholderhq.com/v3/photos/9803b71e-e740-4c1f-a01d-54b48fad8768-original.jpg" alt="cam-ih" /></a>
                        </CCardBody>
                    </CCard>
                </CCol>
                <CCol xs={6} >
                    <CCard>
                        <CCardBody className="camera-feed">
                        <p className="float-start">Temparature: 95<span>&#176;</span>F</p>
                        <p className="float-end">Captured: 12/02/2022</p>
                        <a className="link-dark m-2" href="http://34.207.149.114/uploads/99ada74b-84c2-4ca1-9019-c186408dcd3d-original.jpg" download="" target="_blank" rel="noreferrer"> <img className="img-fluid" src="https://photos-legacy.beholderhq.com/v3/photos/9803b71e-e740-4c1f-a01d-54b48fad8768-original.jpg" alt="cam-ih" /></a>
                        </CCardBody>
                    </CCard>
                </CCol>
                <CCol xs={6} >
                    <CCard>
                        <CCardBody className="camera-feed">
                        <p className="float-start">Temparature: 95<span>&#176;</span>F</p>
                        <p className="float-end">Captured: 12/02/2022</p>
                        <a className="link-dark m-2" href="http://34.207.149.114/uploads/99ada74b-84c2-4ca1-9019-c186408dcd3d-original.jpg" download="" target="_blank" rel="noreferrer"> <img className="img-fluid" src="https://photos-legacy.beholderhq.com/v3/photos/9803b71e-e740-4c1f-a01d-54b48fad8768-original.jpg" alt="cam-ih" /></a>
                        </CCardBody>
                    </CCard>
                </CCol>
                <CCol xs={6} >
                    <CCard>
                        <CCardBody className="camera-feed">
                        <p className="float-start">Temparature: 95<span>&#176;</span>F</p>
                        <p className="float-end">Captured: 12/02/2022</p>
                        <a className="link-dark m-2" href="http://34.207.149.114/uploads/99ada74b-84c2-4ca1-9019-c186408dcd3d-original.jpg" download="" target="_blank" rel="noreferrer"> <img className="img-fluid" src="https://photos-legacy.beholderhq.com/v3/photos/9803b71e-e740-4c1f-a01d-54b48fad8768-original.jpg" alt="cam-ih" /></a>
                        </CCardBody>
                    </CCard>
                </CCol>
                <CCol xs={6} >
                    <CCard>
                        <CCardBody className="camera-feed">
                        <p className="float-start">Temparature: 95<span>&#176;</span>F</p>
                        <p className="float-end">Captured: 12/02/2022</p>
                        <a className="link-dark m-2" href="http://34.207.149.114/uploads/99ada74b-84c2-4ca1-9019-c186408dcd3d-original.jpg" download="" target="_blank" rel="noreferrer"> <img className="img-fluid" src="https://photos-legacy.beholderhq.com/v3/photos/9803b71e-e740-4c1f-a01d-54b48fad8768-original.jpg" alt="cam-ih" /></a>
                        </CCardBody>
                    </CCard>
                </CCol>
                <CCol xs={6} >
                    <CCard>
                        <CCardBody className="camera-feed">
                        <p className="float-start">Temparature: 95<span>&#176;</span>F</p>
                        <p className="float-end">Captured: 12/02/2022</p>
                        <a className="link-dark m-2" href="http://34.207.149.114/uploads/99ada74b-84c2-4ca1-9019-c186408dcd3d-original.jpg" download="" target="_blank" rel="noreferrer"> <img className="img-fluid" src="https://photos-legacy.beholderhq.com/v3/photos/9803b71e-e740-4c1f-a01d-54b48fad8768-original.jpg" alt="cam-ih" /></a>
                        </CCardBody>
                    </CCard>
                </CCol>
                
            </CRow>

        </>
    )
}
export default CameraDetails