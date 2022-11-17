// hjælp fra: https://therichpost.com/how-to-save-reactjs-form-data-in-nodejs-backend/

import React, { Component } from 'react';
import axios from 'axios';

class TestForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            name: '',
            number: '',
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

        const {email, name, number} = this.state;

        const customerData = {
            email,
            name,
            number,
        };

        axios
            .post('http://localhost:8080/api/data', customerData)
            .then(() => console.log('Book Created'),


                //this.callAPI()

    )

    .catch(err => {
            console.error(err);
        });
    };

    // bruges ikke
    /*
    callAPI()
    {
        //API request
        axios.get("http://localhost:8080/api/data").then(response => {

            //getting and setting api data into variable

            this.setState({ data : response.data });

        })
    }

     */

    render() {
        return (
            <div>
                <br />
                <div>
                    <h1>Insert the following information for the order:</h1>
                </div>
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

                        <div className="form-group mb-3">
                            <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                onChange={this.handleInputChange}
                            />
                        </div>

                        <div className="form-group mb-3">
                            <input
                                type="number"
                                name="number"
                                placeholder="Number"
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