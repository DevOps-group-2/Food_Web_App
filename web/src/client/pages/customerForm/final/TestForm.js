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
            time: '',
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

        const {email, name, number, time} = this.state;

        const customerData = {
            email,
            name,
            number,
            time
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

                        {/*
                        <div>
                                <select name="time" type="time" onChange={this.handleInputChange}
                                        value={this.state.value} min={'13'}>
                                    <option value="">--Please pick an available time--</option>

                                    <option value={15.00}>15:00</option>
                                    <option value={15.30}>15:30</option>
                                    <option value={15.45}>15:45</option>
                                </select>
                            </div>
                            */}


                        <div>
                            <input type={"datetime-local"}/>
                            { /*when user write in name input box , handleChange() function will be called. */}
                            <select id = "time" class="form-control" data-val="true" data-val="required" name="time">
                                <option value="">--Please pick an available time--</option>
                                <option>19:30</option>
                                <option>19:40</option>
                                <option>19:50</option>
                            </select>
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