import React, {Component} from "react";
import StripeCheckout from "react-stripe-checkout";
import Pay from "./Pay";
import {Link, Navigate, Route, Routes, useNavigate} from "react-router-dom";
import NavigationBar from "../../components/navigationBar/NavigationBar";
import Home from "../homePage/Home";
import PlaceOrder from "../placeOrder/PlaceOrder";
import TestForm from "../customerForm/final/TestForm";
import CustomerForm from "../customerForm/CustomerForm";
import ContactPage from "../contactPage/ContactPage";
import AboutUsPage from "../aboutPage/AboutUsPage";
import LoginPage from "../loginPage/LoginPage";
import AdminDashboard from "../../../adminDashboard/dashboard/components/AdminDashboard";
import MainDash from "../../../adminDashboard/dashboard/components/mainDash/MainDash";



function PayWrapper(){
    const [buttonClicked, setButtonClicked] = React.useState(false);

    if (buttonClicked) {
        return <Navigate to={"/pay"}/>
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <button type="submit">Submit</button>
            </form>
        </div>

    );



    function handleSubmit() {
        console.log('You clicked submit.');
        setButtonClicked(true);

        /*    return(
                <div>
                    <Routes>
                        <Route path={"/pay"} element={<Pay/>}/>
                    </Routes>
                </div>
            );*/
    }

}







export default PayWrapper;