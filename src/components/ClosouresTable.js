import React from "react";
import DataTable from "react-data-table-component";
import Constants, { userToken } from "src/Constants";
import { CCard, CCardBody} from "@coreui/react";
import { useNavigate } from "react-router-dom";

const ClosouresTable = () => {

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
        }
    ];

    React.useEffect(() => {
        let url = Constants.closures;


        (async () => {
            let response = await fetch(url + `?per_page=${pagination.per_page}&page_number=${pagination.page_number}`, {
                method: 'GET',
                headers: {
                    'Authorization': userToken(),

                }
            })
            let data = await response.json();
            console.log(data);
            setData(data.data);
            setTotal(data.total);


        })()
    }, [pagination, load, filter])


    return (
        <>
            <CCard className="my-2">
                <CCardBody>
                    <div className="row">
                        <div className="col-md-6">
                            <h5 className="d-inline text-uppercase">All Closoures</h5>
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

export default ClosouresTable;