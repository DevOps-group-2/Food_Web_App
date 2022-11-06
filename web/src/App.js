import './App.css';
//import LoginPage from "./client/pages/loginPage/LoginPage.js";
//import Pay from "./client/pages/payment/Pay.js";

import NavigationBar from "./client/components/navigationBar/NavigationBar";
//import {Route, Switch, Routes, Link, useParams, useNavigate} from "react-router-dom";
import {Route, Routes} from "react-router-dom";
import Menu from "./client/pages/menu/Menu";
import LoginPage from "./client/pages/loginPage/LoginPage";
import PlaceOrder from "./client/pages/placeOrder/PlaceOrder";
import CustomerForm from "./client/pages/customerForm/CustomerForm";
import AdminDashboard from "./adminDashboard/dashboard/components/AdminDashboard"
import AboutUsPage from "./client/pages/aboutPage/AboutUsPage"
import ContactPage from "./client/pages/contactPage/ContactPage";


function App() {
    return (
        <>

            <NavigationBar></NavigationBar>
            <div>
                <Routes>
                    <Route path={"/"} element={<h1>home</h1>}/>
                    <Route path={"/menu"} element={<Menu/>}/>
                    <Route path={"/contact"} element={<ContactPage/>}/>
                    <Route path={"/login"} element= {<LoginPage/>}/>
                    <Route path={"/AboutUs"} element={<AboutUsPage/>}/>
                    <Route path={"/payment"} element={{/*<Pay/>*/}}/>
                    <Route path={"/placeorder"} element={<PlaceOrder/>}/>
                    <Route path={"/Form"} element={<CustomerForm/>}/>
                    <Route path={"/admin"} element={<AdminDashboard/>}/>
            </Routes>
            </div>

        </>
    );
}

export default App;