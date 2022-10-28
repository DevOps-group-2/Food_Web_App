import * as React from 'react';
import './AdminDashboard.css'
import SideBar from "./components/sidebar/sideBar"
import AppendingOrders from "./components/AppendingOrders";

function AdminDashboard(){
    return(
        <>
            <div className="dashBoard">
                <SideBar  />
                <AppendingOrders />
            </div>
        </>

    )
}

export default AdminDashboard;