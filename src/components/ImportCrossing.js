import React from "react";
import Constants, { userToken } from "src/Constants";
import ActionButton from "./ActionButton";
import { ToastContainer, toast } from 'react-toastify';
import { CCard, CCardBody } from "@coreui/react";
import { useNavigate } from "react-router-dom";
import template from '../assets/template.xlsx';

const ImportCrossing = () => {

    const navigate = useNavigate()
    const [data, setData] = React.useState([]);
    const [pagination, setPagination] = React.useState({
        per_page: 10,
        page_number: 1
    })
    const [filter, setFilter] = React.useState({
        search : '',
        status : ''
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
            selector: row => row.name,
            sortable: true,
        },
        {
            name: 'Jurisdiction',
            selector: row => row.jurisdiction,
            sortable: true,
        },
        {
            name: 'Address',
            selector: row => row.address,
            sortable: true,
        },
        {
            name: 'Status',
            selector: row => <span className={`status-${row.status}`}>{row.status}</span>,
            sortable: true,
        },
        {
            name: 'Last Modified',
            selector: row => new Date(row.updated_at).toLocaleString(),
            sortable: true,
        },
        {
            name: 'Action',
            selector: (row) => <ActionButton onView={() => handleView(row)} onEdit={() => handleEdit(row)} onDelete={() => handleDelete(row.id)} />,
            sortable: true
        }
    ];

    const handleView = (row) => {
        console.log(row);
        navigate('/crossings/view', { state: row });
    }

    const handleEdit = (row) => {
        // console.log(row);
        navigate('/crossings/edit', { state: row });
    }

    const handleDelete = async (id) => {
        let url = Constants.deleteCrossing + id;
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

    const handleSearch = () => {
        let search = document.querySelector('.search-text').value;
        let status = document.querySelector('.search-status').value;
        setFilter({search, status})

    }

    const handleUploads = async () => {
        let form = document.querySelector('.import-form');
        let url = Constants.crossingsImport;
        let response = await fetch(url, {
            method: 'POST',
            headers: {
                'Authorization': userToken(),

            },
            body:new FormData(form)
        })
        let data = await response.json();
        form.reset();
        // console.log(data);
        let {errors, successfull, warnings} = data.data;
        errors.forEach(err => {
            toast.error(err);
        })

        warnings.forEach(wrr => {
            toast.warning(wrr);
        })

        if(successfull){
            toast.success(successfull+ " Imported Seccessfully");
        }
    }
    React.useEffect(() => {
        let url = Constants.crossings;


        (async () => {
            let response = await fetch(url + `?per_page=${pagination.per_page}&page_number=${pagination.page_number}&search=${filter.search}&status=${filter.status}`, {
                method: 'GET',
                headers: {
                    'Authorization': userToken(),

                }
            })
            let data = await response.json();
            // console.log(data);
            setData(data.data);
            setTotal(data.total);


        })()
    }, [pagination, load, filter])


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
                            <h5 className="d-inline text-uppercase">Crossing Data Import</h5>
                        </div>
                        <div className="col-md-6">
                            <div className="float-end d-inline-flex justify-content-between">
                            <label htmlFor="file" type="submit" color="primary" className="btn btn-primary m-2">Import</label>
                        </div>
                        </div>
                    </div>
                    <a className="text-reset" download="template.xlsx" href={template}>Download Excel Template</a>
                </CCardBody>
            </CCard>
            <form encType="multipart/from-data" className="d-none import-form">
                <input type="file" name="file" id="file" accept=".xlsx" onChange={handleUploads}/>
            </form>
        </>
    )
}

export default ImportCrossing;