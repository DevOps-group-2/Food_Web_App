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

    handleInputChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    handleSubmit = e => {
        e.preventDefault();

        const { email, name, number } = this.state;

        const book = {
            email,
            name,
            number,
        };

        axios
            .post('http://localhost:8080/api/data', book)
            .then(() => console.log('Book Created'),


                this.callAPI()

    )

    .catch(err => {
            console.error(err);
        });
    };

    callAPI()
    {
        //API request
        axios.get("http://localhost:8080/api/data").then(response => {

            //getting and setting api data into variable

            this.setState({ data : response.data });

        })
    }



    render() {
        return (
            <div>
                <br />
                <div className="container-fluid p-5 bg-primary text-white text-center">
                    <h1>How to save Reactjs Form Data in Nodejs Backend?</h1>
                    <p>Therichpost.com is the best tutorial site</p>
                </div>
                <div className="container mt-5">
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group mb-3">
                            <input
                                type="text"
                                className="form-control"
                                name="email"
                                placeholder="Email"
                                onChange={this.handleInputChange}
                            />
                        </div>

                        <div className="form-group mb-3">
                            <input
                                type="text"
                                className="form-control"
                                name="name"
                                placeholder="Name"
                                onChange={this.handleInputChange}
                            />
                        </div>

                        <div className="form-group mb-3">
                            <input
                                type="text"
                                className="form-control"
                                name="number"
                                placeholder="Number"
                                onChange={this.handleInputChange}
                            />
                        </div>


                        <button className="btn btn-success" type="submit">
                            TestForm
                        </button>

                    </form>

                    <h3 className="mt-3">Book Details:</h3>
                    <table className="table table-bordered table-striped">
                        <thead>
                        <tr>
                            <th scope="col">Email</th>
                            <th scope="col">Name</th>
                            <th scope="col">Number</th>

                        </tr>
                        </thead>
                        <tbody>
                        {this.state.data.map((result) => {
                            return (
                                <tr>
                                    <td>{result.Email}</td>
                                    <td>{result.Name}</td>
                                    <td>{result.Number}</td>
                                </tr>
                            )})}

                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default TestForm;