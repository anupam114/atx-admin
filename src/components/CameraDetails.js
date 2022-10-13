import React from "react"
import { CRow, CCol, CCard, CCardBody, CButton, CFormInput, CFormLabel } from "@coreui/react";
import {  useParams } from "react-router-dom";
import Constants, { userToken } from "src/Constants";
const CameraDetails = () => {

    const { id } = useParams();

    const [data, setData] = React.useState({});
    const [copy, setCopy] = React.useState({})

    React.useEffect(() => {
        (async () => {
            let url = Constants.singleCamera + id;
            let response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Authorization': userToken(),
                    'Content-Type':'application/json'

                },
            })
            let data = await response.json();
            setData(data.attributes[0]);
            setCopy(data.attributes[0]);
        })();
    }, [id])

    const handleSearch = (e) => {
        e.preventDefault();

        let formData = new FormData(e.target)
        let start = new Date(formData.get('start'))
        let end = new Date(formData.get('end'))

        let localImages = data.images
        let newImages = localImages?.filter((item, index) => {
            let date = new Date(item.created_at)
            return date > start && date < end
        });
        let newData = {...data, images: newImages}
        setCopy(newData)
        
    }

    return (
        <>
            <CCard className="my-2">
                <CCardBody>
                    <div className="row">
                        <div className="col-md-6">
                            <h5>Camera Id: {data.unique_id}</h5>
                            <h5>Location: {data.address}</h5>
                        </div>
                        <div className="col-md-6">
                            <h5 className="float-end">Latest Image Captured At: {new Date(data?.images?.[0]?.created_at).toLocaleString()}</h5>
                        </div>
                    </div>
                </CCardBody>
            </CCard>

            <CCard className="my-2">
                <CCardBody>
                    <form className="row" onSubmit={handleSearch}>
                        <div className="col-5">
                            <CFormLabel>Start DateTime</CFormLabel>
                            <CFormInput type="datetime-local" className="search-text" name="start" />
                        </div>
                        <div className="col-5">
                            <CFormLabel>End DateTime</CFormLabel>
                            <CFormInput type="datetime-local" className="search-text" name="end" />
                        </div>
                        <div className="col-2">
                            <CFormLabel style={{opacity: 0}}>Search</CFormLabel>
                            <CButton type="submit" className="float-end w-100" color="primary">Search</CButton>
                        </div>
                    </form>
                </CCardBody>

            </CCard>

            <CRow>

                {
                    copy.images?.map((image, index) => {
                        return(
                            <CCol xs={6} key={index}>
                            <CCard>
                                <CCardBody className="camera-feed">
                                    {/* <p className="float-start">Temparature: 95<span>&#176;</span>F</p> */}
                                    <p className="float-end">Captured: {new Date(image.created_at).toLocaleString()}</p>
                                    <a className="link-dark m-2" href={`${Constants.base}uploads/${image.image_name}`} target="_blank" rel="noreferrer"> <img className="img-fluid" src={`${Constants.base}uploads/${image.image_name}`} alt={image.image_name} /></a>
                                </CCardBody>
                            </CCard>
                        </CCol>
                        )
                    })

                }

            </CRow>

        </>
    )
}
export default CameraDetails