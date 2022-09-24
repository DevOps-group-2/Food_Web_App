
import {Link} from "react-router-dom";
import './NavigationBar.css';
import React from "react";
import BasketButtonHeader from "../placeOrder/basket/header/BasketButtonHeader";
//import { Switch } from "react-router-dom";



function NavigationBar() {

    return(
        <div style={{ backgroundColor: "silver" }}>
            <div className="header">
                <h1><Link to="/">Restaurant Group 2</Link></h1>
            </div>
        <nav>
            <div className="body">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/menu">Menu</Link>
                    <Link to="/placeorder">Place an Order</Link>
                </li>
                <li>
                    <Link to="/about">About Us</Link>
                </li>
                <li>
                    <Link to="/order">Order</Link>
                </li>
                <li>
                    <Link to="/contact">Contact Us</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
                <BasketButtonHeader />
            </ul>
            </div>
        </nav>
        </div>

    )
}



export default NavigationBar;