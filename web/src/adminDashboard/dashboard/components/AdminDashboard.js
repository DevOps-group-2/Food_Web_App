import * as React from 'react';
import './AdminDashboard.css'
import SideBar from "./sidebar/sideBar"
import MainDash from "./mainDash/MainDash";
import {tokenStore} from "../../../client/stores/TokenStore";

function AdminDashboard() {

    return (
        <div>
            {(tokenStore?.state === tokenStore?.Loginstates?.indexOf(2) && tokenStore.validate()) ?
                <div className="dashBoard">
                    <SideBar/>
                    <MainDash/>
                </div>
                : <div> you need to log in first</div>
            }
        </div>
    )
}

export default AdminDashboard;