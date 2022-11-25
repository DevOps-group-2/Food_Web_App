// hjælp fra: https://therichpost.com/how-to-save-reactjs-form-data-in-nodejs-backend/
// kig på det her for mere styling https://www.w3schools.com/css/tryit.asp?filename=trycss_form_responsive

import React, {Component, useState} from 'react';
import axios from 'axios';
import './CustomerForm.css';

class CustomerForm extends Component {


    constructor(props) {
        super(props);

        this.state = {
            email: '',
            name: '',
            number: '',
            date: '',
            data: [],
        };

    }

    handleInputChange = event => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };

    handleSubmit = event => {
        event.preventDefault();

        const {email, name, number, date} = this.state;

        const customerData = {
            email,
            name,
            number,
            date
        };

        axios
            .post('http://localhost:8080/api/data', customerData)
            .then(() => console.log('data created'),

                //this.callAPI()

    )
    .catch(err => {
            console.error(err);
        });
    };

    render() {

        return (
            <div className="App">
                <header>
                    <h1>Din Oplysning</h1>
                </header>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <div>
                        <div className="add-rowSpace">
                            <label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                onChange={this.handleInputChange}
                            />
                            </label>
                        </div>
                        <div className="add-rowSpace">
                            <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                onChange={this.handleInputChange}
                            />
                        </div>

                        <div className="add-rowSpace">
                            <input
                                type="phone-number"
                                name="number"
                                placeholder="Number"
                                onChange={this.handleInputChange}
                            />
                        </div>
                            
                        <div className="add-rowSpace">
                            <input
                                name="date" type="date"
                                min={new Date().toISOString().slice(0,10)}
                                onChange={this.handleInputChange}
                            />
                        </div>



                            {/*
                        <input
                            name="date" type="datetime-local"
                            min={new Date().toISOString().slice(0, -8)}
                            onChange={this.handleInputChange}
                        />
                        */}
                        </div>
                        <button type="submit">
                            Submit information
                        </button>

                    </form>

                </div>

            </div>

        );
    }
}

export default CustomerForm;