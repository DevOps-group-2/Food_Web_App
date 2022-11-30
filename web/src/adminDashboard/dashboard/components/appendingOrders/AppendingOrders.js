//Inspiration from this turorial

import * as React from 'react';
import './AppendingOrders.css';
import {useEffect, useState} from "react";
import {DataGrid} from "@mui/x-data-grid";

const columns = [
    {field: 'idOrder', headerName: 'ID', sortable: false, filterable: false},
    {field: 'menu', headerName: 'Menu', width: 300, sortable: false, filterable: false},
    {field: 'price', headerName: 'Price', width: 100, sortable: false, filterable: false},
    {field: 'status', headerName: 'Status', width: 300, type: 'singleSelect', valueOptions: ['appending', 'preparing','done']},
    {field: 'amount', headerName: 'Amount'}
]

const AppendingOrders = (setSelectedLink, link ) =>{
    const [tableData, setTableData] = useState([])
    const [pageSize, setPageSize] = useState([])

    useEffect(() => {
        fetch("http://localhost:8080/api/items")
            .then(data => data.json())
            .then(data => setTableData(data))
    })


    return(
        <div style={{ width: '100%', backgroundColor: 'whitesmoke', borderRadius: 20, height: 400, marginBottom: 40, boxShadow: 20}}>
            <DataGrid
                getRowId={(row) => row.idOrder}
                rows={tableData}
                columns={columns}
                /*                rowsPerPageOptions={[5,10,15]}
                                pageSize={pageSize}
                                onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}*/


            />

        </div>

    )
}

export default AppendingOrders;