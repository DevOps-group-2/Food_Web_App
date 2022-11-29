// hjælp fra: https://therichpost.com/how-to-save-reactjs-form-data-in-nodejs-backend/

import React, {Component, useState} from 'react';
import axios from 'axios';

class TestForm extends Component {


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
            <div>
                <br />
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <div>
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                onChange={this.handleInputChange}
                            />
                        </div>

                        <div>
                            <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                onChange={this.handleInputChange}
                            />
                        </div>

                        <div>
                            <input
                                type="phone-number"
                                name="number"
                                placeholder="Number"
                                onChange={this.handleInputChange}
                            />
                        </div>

                        <div>
                        <input
                            name="date" type="datetime-local"
                            min={new Date().toISOString().slice(0, -8)}
                            onChange={this.handleInputChange}
                        />
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

export default TestForm;