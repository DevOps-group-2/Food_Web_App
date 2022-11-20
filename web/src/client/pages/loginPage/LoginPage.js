//  login page. made using following tutoral https://contactmentor.com/login-form-react-js-code/
// utilizes usestates and a login form

import React, { useState } from "react";
import "./LoginPage.css";
import {tokenStore} from "../../stores/TokenStore";
import AdminDashboard from "../../../adminDashboard/dashboard/components/AdminDashboard";
import {Route} from "react-router-dom";

function LoginPage() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    //"https://localhost8080"
    //"https://food-webapp.grp2.diplomportal.dk"
    const [errorMessage, setErrorMessage] = useState({});
    const handleSubmit = async (event) => {
        event.preventDefault();
        var bcrypt = require('bcryptjs');
        const {uname, pass} = document.forms[0];
        const hashedPassword = bcrypt.hashSync(pass.value, '$2a$10$CwTycUXWue0Thq9StjUM0u')
        let token = await fetch("https://food-webapp.grp2.diplomportal.dk/api/auth/login", {
            "headers" : {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            "method": "POST",
            "body": JSON.stringify({
                username: uname.value,
                password: hashedPassword
            })
        })
        if (token != null) {
            tokenStore.changeLoginBool(true)
            //setting tokenStore states, and saving token
            tokenStore.token = token

        } else {
            setErrorMessage({name: "invalid name or password"});
            renderErrorMessage()
        }
    };

    const renderErrorMessage = (name) =>
        name === errorMessage.name && (
            <div className="error">{errorMessage.message}</div>
        );

    //login form
    const renderForm = (
        <div className="form">
            <div className="title">Sign In</div>
            <form onSubmit={handleSubmit}>
                <div className="input-container">
                    <label>Username </label>
                    <input type="text" name="uname" required />
                    {renderErrorMessage("uname")}
                </div>
                <div className="input-container">
                    <label>Password </label>
                    <input type="password" name="pass" required />
                    {renderErrorMessage("pass")}
                </div>
                <div className="button-container">
                    <input type="submit" />
                </div>
            </form>

        </div>
    );

    return (
        <div className="app">
            <div className="login-form">
                {tokenStore.state ? <div>logged in</div> : renderForm}
            </div>
        </div>
    );
}
export default LoginPage;