import React from 'react';
import { CCard, CCardBody, CForm, CFormInput, CFormLabel, CFormTextarea, CFormSelect} from "@coreui/react";
import { Link, useLocation } from 'react-router-dom';
import Constants, { userToken } from 'src/Constants';
import { toast, ToastContainer } from 'react-toastify';
const statusMap = {
    open : 1,
    closed : 0,
    caution : 2
}
const CrossingView = (props) => {
    const location = useLocation();

    const parseFormtoJson = (form) => {
        let inputs = form.querySelectorAll('.form-control');
        let data = {}
        inputs.forEach((input) => {
            data[input.name] = input.value
        })
        return data;
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        let data = parseFormtoJson(e.target);
        data.status = parseInt(data.status)
        data.lat = parseFloat(data.lat)
        data.lon = parseFloat(data.lon)
        // console.log(data)
        let url = Constants.updateCrossing + location.state.id;
        let response = await fetch(url, {
            method: 'POST',
            headers: {
                'Authorization': userToken(),
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        let json = await response.json();

        if (json.status === 200) {
            toast.success("Record updated successfully!");

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
            <CCard className="my-2">
                <CCardBody>
                    <h5 className="d-inline text-uppercase">View Crossing</h5>
                    <Link to="/crossings" className="btn text-uppercase btn-sm px-4  btn-primary float-right">Back</Link>
                </CCardBody>
            </CCard>

            <CCard>
                <CCardBody>
                    <CForm onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <CFormLabel htmlFor="name">Name<span className="text-danger">*</span></CFormLabel>
                            <CFormInput type="text" placeholder="Enter Your Name" name="name" defaultValue={location.state.name} readOnly/>
                        </div>
                        <div className="mb-3">
                            <CFormLabel htmlFor="jurisdiction">Jurisdiction<span className="text-danger">*</span></CFormLabel>
                            <CFormInput type="text" placeholder="Enter Your Name" name="jurisdiction" defaultValue={location.state.jurisdiction} readOnly/>
                        </div>
                        <div className="mb-3">
                            <CFormLabel htmlFor="address">Address<span className="text-danger">*</span></CFormLabel>
                            <CFormTextarea rows="3" name="address" defaultValue={location.state.address} readOnly></CFormTextarea>
                        </div>
                        <div className="mb-3">
                            <CFormLabel htmlFor="lat">Latitude<span className="text-danger">*</span></CFormLabel>
                            <CFormInput type="text" placeholder="Enter Your Name" name="lat" defaultValue={location.state.lat} readOnly/>
                        </div>
                        <div className="mb-3">
                            <CFormLabel htmlFor="lon">Longitude<span className="text-danger">*</span></CFormLabel>
                            <CFormInput type="text" placeholder="Enter Your Name" name="lon" defaultValue={location.state.lon} readOnly/>
                        </div>
                        <div className="mb-3">
                            <CFormLabel htmlFor="comment">Comments</CFormLabel>
                            <CFormTextarea rows="3" name="comment" defaultValue={location.state.comment} readOnly></CFormTextarea>
                        </div>
                        <div className="mb-3">
                            <CFormLabel htmlFor="status">Status<span className="text-danger">*</span></CFormLabel>
                            <CFormSelect className='form-control' name="status" defaultValue={statusMap[location.state.status]} readOnly>
                                <option value="0">Closed</option>
                                <option value="1">Open</option>
                                <option value="2">Caution</option>
                            </CFormSelect>
                        </div>
                    </CForm>
                </CCardBody>
            </CCard>



        </>
    );
}
export default CrossingView;