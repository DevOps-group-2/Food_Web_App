import * as React from 'react';
import './Dashboard.css'
import SideBar from "./sidebar/sideBar"
import NewOrders from "./newOrders";

function Dashboard(){
    return(
        <div className="dashBoard">
            <SideBar  />
            <NewOrders />
        </div>
    )
}

export default Dashboard;