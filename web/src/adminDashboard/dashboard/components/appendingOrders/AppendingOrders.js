import * as React from 'react';
import './AppendingOrders.css';
import {useEffect, useState} from "react";
import {DataGrid} from "@mui/x-data-grid";

const columns = [
    {field: 'idOrder', headerName: 'ID', width: 100},
    {field: 'orderedTotalPrice', headerName: 'Total price', width: 100}

/*  {field: 'idOrder', headerName: 'ID'},
    {field: 'menu', headerName: 'Menu', width: 100},
    {field: 'price', headerName: 'Price', width: 100},
    {field: 'amount', headerName: 'Amount', width: 100}*/
]

const AppendingOrders = (setSelectedLink, link ) =>{
    const [tableData, setTableData] = useState([])


    useEffect(() => {
        fetch("http://localhost:8080/api/items")
            .then(data => data.json())
            .then(data => setTableData(data))
    })


    return(
        <div style={{ width: '100%'}}>
            <DataGrid sx={{
                backgroundColor: 'whitesmoke',
                borderRadius: 3,
                height: 400,
                marginBottom: 4,
                boxShadow: 1
            }}
                getRowId={(row) => row.idOrder}
                rows={tableData}
                columns={columns}
                checkboxSelection

            />

        </div>

    )
}

export default AppendingOrders;