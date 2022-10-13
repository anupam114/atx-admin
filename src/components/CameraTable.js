import React from "react";
import DataTable from "react-data-table-component";
import Constants, { userToken } from "src/Constants";
import ActionButton from "./ActionButton";
import { CCard, CCardBody} from "@coreui/react";
import { ToastContainer, toast } from 'react-toastify';
import { Link, useNavigate } from "react-router-dom";

const CameraTable = () => {

    const navigate = useNavigate();

    const [data, setData] = React.useState([]);
    const [pagination, setPagination] = React.useState({
        per_page: 10,
        page_number: 1
    })
    const [load, setLoad] = React.useState(true)
    const [total, setTotal] = React.useState(0);
    const handleChange = () => {

    }
    const columns = [
        {
            name: 'Id',
            selector: row => row.id,
            sortable: true,
        },
        {
            name: 'Name',
            selector: row => <Link to={`/camera-details/${row.id}`} className='fw-bold link-dark text-decoration-none'>{row.name}</Link>,
            sortable: true,
        },

        {
            name: 'Address',
            selector: row => row.address,
            sortable: true,
        },
        // {
        //     name: 'Images',
        //     selector: row => (row.images.length) ?  <img className="pointer p-2 w-50" alt={row.images[0].image_name} src={Constants.base +"uploads/" + row.images[0].image_name} /> : 'No Images',
        //     sortable: true,
        // },
        {
            name: 'Last Modified',
            selector: row => new Date(row.updated_at).toLocaleString(),
            sortable: true,
        },
        {
            name: 'Action',
            selector: (row) => <ActionButton onEdit={() => handleEdit(row)} onDelete={() => handleDelete(row.id)} />,
            sortable: true
        }
    ];

    // const handleView = (row) => {
    //     navigate('/cameras/view', { state: row });
    // }

    const handleEdit = (row) => {
        // console.log(row);
        navigate('/cameras/edit', { state: row });
    }

    const handleDelete = async (id) => {
        let url = Constants.deleteCameras + id;
        let response = await fetch(url, {
            method: 'GET',
            headers: {
                'Authorization': userToken(),

            }
        })
        let json = await response.json();
        if (json.status === 200) {
            setLoad(!load);
            toast.success("Record deleted successfully!");
        }
    }

    React.useEffect(() => {
        let url = Constants.cameras;


        (async () => {
            let response = await fetch(url + `?per_page=${pagination.per_page}&page_number=${pagination.page_number}`, {
                method: 'GET',
                headers: {
                    'Authorization': userToken(),

                }
            })
            let data = await response.json();
            setData(data.attributes
                );
            setTotal(data.totalResult);


        })()
    }, [pagination, load] )


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
                    <div className="row">
                        <div className="col-md-6">
                            <h5 className="text-uppercase">All Cameras</h5>
                        </div>
                        <div className="col-md-6">
                        <Link to="/cameras/add" className="btn text-uppercase btn-primary m-2 float-end">Add</Link>
                        </div>
                    </div>
                </CCardBody>
            </CCard>
            <DataTable
                columns={columns}
                data={data}
                pagination
                onSelectedRowsChange={handleChange}
                paginationServer
                paginationTotalRows={total}
                onChangeRowsPerPage={(per_page) => setPagination({ ...pagination, per_page })}
                onChangePage={(page_number, per_page) => setPagination({ ...pagination, page_number })}
            />
        </>
    )
}

export default CameraTable;