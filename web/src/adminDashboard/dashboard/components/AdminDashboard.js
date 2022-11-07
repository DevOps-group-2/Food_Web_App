import * as React from 'react';
import './AdminDashboard.css'
import SideBar from "./sidebar/sideBar"
import MainDash from "./mainDash/MainDash";

function AdminDashboard(){
    return(
        <>
            <div className="dashBoard">
                <SideBar  />
                <MainDash />
            </div>
        </>

    )
}

export default AdminDashboard;