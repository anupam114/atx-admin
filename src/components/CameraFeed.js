import React from "react";
import { CRow, CCol, CCard, CCardBody, CModal, CModalHeader, CModalBody, CCarousel, CCarouselItem, CImage, CCarouselCaption } from "@coreui/react";
import { Link } from "react-router-dom";
import Constants, { userToken } from "src/Constants";
const CameraFeed = () => {
    const [visible, setVisible] = React.useState(false);
    const [data, setData] = React.useState([]);

    React.useEffect(() => {
        let url = Constants.cameras;
        (async () => {
            let response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Authorization': userToken(),

                }
            })
            let data = await response.json();
            // console.log(data);
            setData(data.attributes);
        })()
    }, [])

    return (
        <>
            <CCard className="my-2">
                <CCardBody>
                    <div className="row">
                        <div className="col-md-6">
                            <h5 className="text-uppercase">Camera Feeds</h5>
                        </div>
                    </div>
                </CCardBody>
            </CCard>
            <CRow>
                {
                    data.map((cameras) => (

                        <CCol xs={6} key={cameras.id}>
                            <CCard>
                                <CCardBody className="camera-feed">
                                    <Link to="/camera-details" style={{textDecoration: 'none', color:'black'}}>
                                        <img className="img-fluid" src={Constants.base + "uploads/" + cameras.images[0].image_name} alt={cameras.images[0].image_name} />
                                        <h5>Camera Id: {cameras.unique_id}</h5>
                                        <h5>Location: {cameras.address}</h5>
                                        <h6>Last Updated: {new Date(cameras.updated_at).toLocaleString()}</h6>
                                    </Link>
                                    <span onClick={() => setVisible(!visible)} className="mouse link-dark m-2"><i className="far fa-search-plus"></i></span>
                                </CCardBody>
                            </CCard>
                        </CCol>
                    ))
                }
            </CRow>

            <CModal visible={visible} onClose={() => setVisible(false)}>
                <CModalHeader onClose={() => setVisible(false)}>
                </CModalHeader>
                <CModalBody>
                    <CCarousel controls indicators>
                        <CCarouselItem>
                            <CImage className="d-block w-100" src="https://photos-legacy.beholderhq.com/v3/photos/9803b71e-e740-4c1f-a01d-54b48fad8768-original.jpg" alt="slide 1" />
                            <CCarouselCaption className="d-none d-md-block">
                                <p>Camera: 0123456789</p>
                            </CCarouselCaption>
                        </CCarouselItem>
                        <CCarouselItem>
                            <CImage className="d-block w-100" src="https://photos-legacy.beholderhq.com/v3/photos/9803b71e-e740-4c1f-a01d-54b48fad8768-original.jpg" alt="slide 2" />
                            <CCarouselCaption className="d-none d-md-block">
                            <p>Camera: 0123456789</p>
                            </CCarouselCaption>
                        </CCarouselItem>
                        <CCarouselItem>
                            <CImage className="d-block w-100" src="https://photos-legacy.beholderhq.com/v3/photos/9803b71e-e740-4c1f-a01d-54b48fad8768-original.jpg" alt="slide 3" />
                            <CCarouselCaption className="d-none d-md-block">
                            <p>Camera: 0123456789</p>
                            </CCarouselCaption>
                        </CCarouselItem>
                    </CCarousel>
                </CModalBody>
            </CModal>

        </>
    )
}
export default CameraFeed;