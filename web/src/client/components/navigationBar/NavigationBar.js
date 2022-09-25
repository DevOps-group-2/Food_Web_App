
import {Link} from "react-router-dom";
import './NavigationBar.css';
import React from "react";
import BasketButtonHeader from "../placeOrder/basket/header/BasketButtonHeader";
import image from '../../../assets/header/logotext_grey.png';


//import { Switch } from "react-router-dom";

function NavigationBar() {

    return(
        <div style={{ backgroundColor: "silver" }}>
            <div className="header">
                <Link to="/"><img src={image} height={200} width={1000}  alt/></Link>
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