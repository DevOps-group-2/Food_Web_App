import React, {Component} from 'react';
import axios from 'axios';
import './ContactUs.css'

class ContactUs extends Component{
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            question: '',
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

        const {email, question} = this.state;

        const customerQuestion = {
            email,
            question
        };

        axios
            .post('http://localhost:8080/api/question', customerQuestion)
            .then(() => console.log('Question created'),
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
                        <h2>Question:</h2>
                        <div>
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                onChange={this.handleInputChange}
                            />
                        </div>

                        <div>

                            <textarea id="" placeholder="Add Your Comment" value=" "></textarea>

                            <div className="comments">
                                <h2>Comments</h2>
                                <div id="comment-box">
                                </div>
                            </div>
                            {/*
                            <input id ="questionBox"
                                type="text"
                                name="question"
                                placeholder="Question"
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

export default ContactUs