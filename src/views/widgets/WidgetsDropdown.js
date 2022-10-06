import React from 'react'
import Constants, { userToken } from "src/Constants";
import {
  CRow,
  CCol,
  CWidgetStatsF,
} from '@coreui/react'

import { Link } from 'react-router-dom';
// import {CIcon ,cilChartPie} from '@coreui/icons-react';
import CIcon from '@coreui/icons-react';
import { cilCheck, cilCamera, cilXCircle, cilArrowRight } from '@coreui/icons';

const WidgetsDropdown = () => {

  const[count, setCount] = React.useState(0)

  React.useEffect(() => {
    let url = Constants.counts;


    (async () => {
        let response = await fetch(url, {
            method: 'GET',
            headers: {
                'Authorization': userToken(),

            }
        })
        let data = await response.json();
        // setData(data.data);
        // setTotal(data.total);
        // console.log(data);
        setCount(data.data)


    })()
}, [])

  return (
    <CRow>
    <CCol xs={4}>
      <CWidgetStatsF
        className="mb-3"
        color="success"
        title="Total Crossings"
        icon={<CIcon icon={cilCheck} height={36} />}
        value={count.totalCrossing}
        footer={
          <Link className="font-weight-bold font-xs text-medium-emphasis" to='/crossings'>
            View more
            <CIcon icon={cilArrowRight} className="float-end" width={16} />
          </Link>
        }
        />
    </CCol>
    <CCol xs={4}>
      <CWidgetStatsF
        className="mb-3"
        color="primary"
        title="Total Cameras"
        icon={<CIcon icon={cilCamera} height={36} />}
        value={count.totalCamera}
        footer={
          <Link className="font-weight-bold font-xs text-medium-emphasis" to='/cameras'>
            View more
            <CIcon icon={cilArrowRight} className="float-end" width={16} />
          </Link>
        }
        />
    </CCol>
    <CCol xs={4}>
      <CWidgetStatsF
        className="mb-3"
        color="danger"
        title="Total Closoures"
        icon={<CIcon icon={cilXCircle} height={36} />}
        value={count.totalClosures}
        footer={
          <Link className="font-weight-bold font-xs text-medium-emphasis" to='/closoures'>
            View more
            <CIcon icon={cilArrowRight} className="float-end" width={16} />
          </Link>
        }
        />
    </CCol>
    </CRow>
  )
}

export default WidgetsDropdown
