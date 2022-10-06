import React from 'react';
import { CCard, CCardBody, CForm, CFormInput, CFormLabel, CFormTextarea, CButton } from "@coreui/react";
import { Link } from 'react-router-dom';
import Constants, { userToken } from 'src/Constants';
import { toast, ToastContainer } from 'react-toastify';
const CameraAdd = () => {

    const parseFormtoJson = (form) => {
        let inputs = form.querySelectorAll('.form-control');
        let data = {}
        inputs.forEach((input) => {
            data[input.name] = input.value
        })

        // console.log(data);

        return data;
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        let data = parseFormtoJson(e.target);
        data.status = parseInt(data.status)
        data.lat = parseFloat(data.lat)
        data.lon = parseFloat(data.lon)

        let url = Constants.createCameras;
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
            toast.success("A new record created!");
            e.target.reset()

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
                    <h5 className="d-inline text-uppercase">Add Cameras</h5>
                    <Link to="/cameras" className="btn text-uppercase btn-sm px-4  btn-primary float-right">Back</Link>
                </CCardBody>
            </CCard>

            <CCard>
                <CCardBody>
                    <CForm onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <CFormLabel htmlFor="name">Name<span className="text-danger">*</span></CFormLabel>
                            <CFormInput type="text" placeholder="Enter Your Name" name="name" required/>
                        </div>
                        <div className="mb-3">
                            <CFormLabel htmlFor="address">Address<span className="text-danger">*</span></CFormLabel>
                            <CFormTextarea rows="3" name="address" required></CFormTextarea>
                        </div>
                        <div className="mb-3">
                            <CFormLabel htmlFor="name">Camera Id<span className="text-danger">*</span></CFormLabel>
                            <CFormInput type="text" placeholder="Unique Camera Id" name="unique_id" required/>
                        </div>
                        <div className="mb-3">
                            <CFormLabel htmlFor="lat">Latitude<span className="text-danger">*</span></CFormLabel>
                            <CFormInput type="text" placeholder="Enter Latitude" name="lat" required/>
                        </div>
                        <div className="mb-3">
                            <CFormLabel htmlFor="lon">Longitude<span className="text-danger">*</span></CFormLabel>
                            <CFormInput type="text" placeholder="Enter Longitude" name="lon" required/>
                        </div>
  
                        <div className="mb-3">
                            <CButton type='submit' color="primary" className="px-4">
                                Create
                            </CButton>
                        </div>
                    </CForm>
                </CCardBody>
            </CCard>



        </>
    );
}
export default CameraAdd;