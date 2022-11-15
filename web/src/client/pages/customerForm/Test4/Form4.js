import React, {useState} from "react";
import {tokenStore} from "../../../stores/TokenStore";

function Form4() {
    let isSubmitted = false;

    const baseUrl = "localhost:8080";
    const [errorMessage, setErrorMessage] = useState({});

    const handleSubmit = async (event) => {
        event.preventDefault();

                let token = await fetch(baseUrl + "/api/data", {
                    "method": "POST",
                    "body": JSON.stringify({
                        "email": email.value,
                        "name": name.value,
                        "number": number.value
                    })
                })
            };



        //login form
        const renderForm = (
            <div className="form">
                <form onSubmit={handleSubmit}>
                    <div className="input-container">
                        <label>Email </label>
                        <input type="text" name="email" required/>
                    </div>
                    <div className="input-container">
                        <label>Name </label>
                        <input type="text" name="name" required/>
                    </div>
                    <div className="input-container">
                        <label>Number </label>
                        <input type="text" name="number" required/>
                    </div>

                    <div className="button-container">
                        <input type="submit"/>
                    </div>
                </form>
            </div>
        );

    }
}
export default Form4;