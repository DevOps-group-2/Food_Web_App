import {
/*    BrowserRouter as Router,
    Route,
    Routes,*/
    Link, /*useParams,useNavigate,*/
} from "react-router-dom";
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
                    <Link to="/about">About Us</Link>
                </li>
                <li>
                    <Link to="/payment">Pay with card</Link>
                </li>

            </ul>
            </div>
        </nav>
        </div>



    )
}
/*function About() {
    return <h1>About </h1>
}

function Users() {
    return <h2>Contact</h2>;
}*/

export default NavigationBar;