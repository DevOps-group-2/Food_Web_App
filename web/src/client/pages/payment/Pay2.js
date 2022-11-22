import React, {Component} from "react";
import StripeCheckout from "react-stripe-checkout";
import Pay from "./Pay";
import {Link, Route, Routes, useNavigate} from "react-router-dom";
import NavigationBar from "../../components/navigationBar/NavigationBar";
import Home from "../homePage/Home";
import PlaceOrder from "../placeOrder/PlaceOrder";
import TestForm from "../customerForm/final/TestForm";
import CustomerForm from "../customerForm/CustomerForm";
import ContactPage from "../contactPage/ContactPage";
import AboutUsPage from "../aboutPage/AboutUsPage";
import LoginPage from "../loginPage/LoginPage";
import AdminDashboard from "../../../adminDashboard/dashboard/components/AdminDashboard";



class Pay2 extends Component{

    handleClick = (user) => {
        this.props.history.push('/route')
    }
    render() {
        return (
            <button type="button" onClick={this.handleClick}>
                Navigate
            </button>
        )
    }




}


export default Pay2;