import './App.css';
import Pay from "./client/pages/payment/Pay.js";
import NavigationBar from "./client/components/navigationBar/NavigationBar";
import {Route, Routes} from "react-router-dom";
import LoginPage from "./client/pages/loginPage/LoginPage";
import PlaceOrder from "./client/pages/placeOrder/PlaceOrder";
import CustomerForm from "./client/pages/customerForm/CustomerForm";
import AdminDashboard from "./adminDashboard/dashboard/components/AdminDashboard"
import AboutUsPage from "./client/pages/aboutPage/AboutUsPage"
import ContactPage from "./client/pages/contactPage/ContactPage";
import Home from "./client/pages/homePage/Home";

import Form4 from "./client/pages/customerForm/Test4/Form4";

function App() {
    return (
        <>

            <NavigationBar></NavigationBar>
            <div>
                <Routes>
                    <Route path={"/"} element={<Home/>}/>
                    <Route path={"/order"} element={<PlaceOrder/>}/>
                    <Route path={"form"} element={<Form4/>}/>

                    <Route path={"/pay"} element={<Pay/>}/>
                    <Route path={"/contact"} element={<ContactPage/>}/>
                    <Route path={"/about"} element={<AboutUsPage/>}/>
                    <Route path={"/login"} element= {<LoginPage/>}/>
                    <Route path={"/admin"} element={<AdminDashboard/>}/>
            </Routes>
            </div>

        </>
    );
}

export default App;