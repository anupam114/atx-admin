import React from "react";
import DataTable from "react-data-table-component";
import Constants, { userToken } from "src/Constants";
import { CCard, CCardBody } from "@coreui/react";
import ActionButton from "./ActionButton";
import { ToastContainer, toast } from 'react-toastify';

const ContactTable = () => {
    const [data, setData] = React.useState([]);
    const [pagination, setPagination] = React.useState({
        per_page: 10,
        page_number: 1
    })
    const [load, setLoad] = React.useState(true)
    const [total, setTotal] = React.useState(0);

    const handleDelete = async (id) => {
        let confirmation  = window.confirm("Do you really want to delete this record?");
        if(!confirmation) {
            return;
        }
        let url = Constants.deleteContacts + id;
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
            name: 'Email',
            selector: row => row.email,
            sortable: true,
        },
        {
            name: 'Phone',
            selector: row => row.phone,
            sortable: true,
        },

        {
            name: 'Message',
            selector: row => row.message,
            sortable: true,
        },

        {
            name: 'Submitted At',
            selector: row => new Date(row.created_at).toLocaleString(),
            sortable: true,
        },
        {
            name: 'Action',
            selector: (row) => <ActionButton onDelete={() => handleDelete(row.id)} />,
            sortable: true
        }
    ];

    React.useEffect(() => {
        let url = Constants.contacts;


        (async () => {
            let response = await fetch(url + `?per_page=${pagination.per_page}&page_number=${pagination.page_number}`, {
                method: 'GET',
                headers: {
                    'Authorization': userToken(),

                }
            })
            let data = await response.json();
            setData(data.data);
            setTotal(data.total);

        })()
    }, [pagination, load])


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
                            <h5 className="d-inline text-uppercase">All Contacts</h5>
                        </div>
                    </div>
                </CCardBody>
            </CCard>
            <DataTable
                columns={columns}
                data={data}
                pagination
                paginationServer
                paginationTotalRows={total}
                onChangeRowsPerPage={(per_page) => setPagination({ ...pagination, per_page })}
                onChangePage={(page_number, per_page) => setPagination({ ...pagination, page_number })}
            />
        </>
    )
}

export default ContactTable;