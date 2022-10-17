import React from "react";
import { CRow, CCol, CCard, CCardBody, CCarousel, CCarouselItem, CCarouselCaption } from "@coreui/react";
import { Link } from "react-router-dom";
import Constants, { userToken } from "src/Constants";
const CameraFeed = () => {
    const [data, setData] = React.useState([]);

    React.useEffect(() => {
        let url = Constants.cameras + '?total_images=32';
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
                                    {
                                        (cameras?.images?.length > 0) ?

                                            <CCarousel controls indicators>

                                                {cameras.images.map((image, index) => {

                                                    return (

                                                        <CCarouselItem key={index}>
                                                            <Link to={`/camera-details/${cameras.id}`} style={{ textDecoration: 'none', color: 'black' }}>
                                                                <img className="img-fluid d-block" src={Constants.base + "uploads/" + image.image_name} alt={image.image_name} />
                                                            </Link>
                                                            {/* <CCarouselCaption className="d-none d-md-block">
                                                                <p className="fw-bold fs-5">Captured : {new Date(image.created_at).toLocaleString()}</p>
                                                            </CCarouselCaption> */}
                                                        </CCarouselItem>

                                                    )

                                                })}

                                            </CCarousel>


                                            : <p>No Image Available</p>
                                    }
                                    <Link to={`/camera-details/${cameras.id}`} style={{ textDecoration: 'none', color: 'black' }}>

                                        <h5>Camera Id: {cameras.unique_id}</h5>
                                        <h5>Location: {cameras.address}</h5>
                                        <h6>Camera Info Updated On: {new Date(cameras.updated_at).toLocaleString()}</h6>
                                    </Link>
                                </CCardBody>
                            </CCard>
                        </CCol>
                    ))
                }
            </CRow>

        </>
    )
}
export default CameraFeed;