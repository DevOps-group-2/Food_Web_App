import React, { Component } from 'react';
import axios from 'axios';

class TestForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            bookID: '',
            bookTitle: '',
            bookAuthor: '',
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

        const { bookID, bookTitle, bookAuthor } = this.state;

        const book = {
            bookID,
            bookTitle,
            bookAuthor,
        };

        axios
            .post('http://localhost:3001/create', book)
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
        axios.get("http://localhost:3001/home").then(response => {

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
                                name="bookID"
                                placeholder="Book ID"
                                onChange={this.handleInputChange}
                            />
                        </div>

                        <div className="form-group mb-3">
                            <input
                                type="text"
                                className="form-control"
                                name="bookTitle"
                                placeholder="Book Title"
                                onChange={this.handleInputChange}
                            />
                        </div>

                        <div className="form-group mb-3">
                            <input
                                type="text"
                                className="form-control"
                                name="bookAuthor"
                                placeholder="Book Author"
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
                            <th scope="col">ID</th>
                            <th scope="col">Title</th>
                            <th scope="col">Author</th>

                        </tr>
                        </thead>
                        <tbody>
                        {this.state.data.map((result) => {
                            return (
                                <tr>
                                    <td>{result.BookID}</td>
                                    <td>{result.Title}</td>
                                    <td>{result.Author}</td>
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