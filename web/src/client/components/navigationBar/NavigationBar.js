
import {Link} from "react-router-dom";
import './NavigationBar.css';
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
            </ul>
            </div>
        </nav>
        </div>

    )
}



export default NavigationBar;