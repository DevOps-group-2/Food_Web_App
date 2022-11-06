
import {Link} from "react-router-dom";
import './NavigationBar.css';
import React from "react";
import BasketButtonHeader from "../placeOrder/basket/header/BasketButtonHeader";
import image from '../../../assets/header/logotext.png';


//import { Switch } from "react-router-dom";

function NavigationBar() {
    return(
        <div style={{ backgroundColor: "silver" }}>
            <div className="header">
                <Link to="/"><img src={image} height={200} width={1000}  alt={""}/></Link>
            </div>
        <nav>
            <div className="body">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/Menu">Menu</Link>
                    <Link to="/Bestil">Place an Order</Link>
                </li>
                <li>
                    <Link to="Om os">AboutUsPages</Link>
                </li>
                <li>
                    <Link to="/Bestil">Order</Link>
                </li>
                <li>
                    <Link to="/Kontakt os">Contact Us</Link>
                </li>
                <li>
                    <Link to="/Login">Login</Link>
                </li>
                <li>
                    <Link to="/aboutUs">AboutUs</Link>
                </li>
            </ul>
            </div>
        </nav>
        </div>

    )
}

export default NavigationBar;