import * as React from 'react';
import './AdminDashboard.css'
import SideBar from "./sidebar/sideBar"
import MainDash from "./mainDash/MainDash";
import {tokenStore} from "../../../client/stores/TokenStore";

function AdminDashboard(){
    let isLoggedIn
    if (tokenStore?.state === 'loggedIn') {
        isLoggedIn = true
    } else {
        isLoggedIn = false
    }
    return(
        <div>
            {isLoggedIn ?   <div className="dashBoard">
                    <SideBar  />
                    <MainDash />
                </div>
                : <div> you need to log in first</div>
            }
        </div>
    )
}

export default AdminDashboard;