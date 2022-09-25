//  login page. made using following tutoral https://contactmentor.com/login-form-react-js-code/
// utilizes usestates and a login form

import React, { useState } from "react";

import "./LoginPage.css";

function LoginPage() {

    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const database = [
        {
            username: "admin",
            password: "password"
        },
    ];

    const errors = {
        invalidName: "invalid username",
        pinvalidPass: "invalid password"
        //note missing username/password not needed as input is required by the input component ex: <input type="text" name="uname" required />
    };
    const handleSubmit = (event) => {
        event.preventDefault();

        var { uname, pass } = document.forms[0];

        //todo, make a backend login authentication instead of using frontend dummy data
        const userData = database.find((user) => user.username === uname.value);

        if (userData) {
            if (userData.password !== pass.value) {

                setErrorMessages({ name: "invalidPass", message: errors.pass });
            } else {
                setIsSubmitted(true);
            }
        } else {
            setErrorMessages({ name: "invalidNam", message: errors.uname });
        }
    };

    const renderErrorMessage = (name) =>
        name === errorMessages.name && (
            <div className="error">{errorMessages.message}</div>
        );

    //login form
    const renderForm = (
        <div className="form">
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
                <div className="title">Sign In</div>
                {isSubmitted ? <div>Admin is logged in</div> : renderForm}
            </div>
        </div>
    );
}
export default LoginPage;