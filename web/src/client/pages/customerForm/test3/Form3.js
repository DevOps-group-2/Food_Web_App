import {Component} from "react";
import $ from 'jquery';

class Form3 extends Component{
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            name: "",
            number: ""
        }
    }
    updateEmail(e){
        this.setState({
            email: e.target.value
        });
    }
    updateName(e){
        this.setState({
            name: e.target.value
        });
    }
    updateNumber(e){
        this.setState({
            number: e.target.value
        });
    }
    save() {
        var context = this;

        $.ajax({
            url: "http://localhost:8080/api/data",
            method: "POST",
            data: {
                email: context.state.email,
                name: context.state.name,
                number: context.state.number
            },
            success: function(response) {
                alert("test3 works");
            },
            error: function (response){
                alert("test3 does not work");
            }
        });
    }
    render(){
        return (
            <div>
                Email:
                <input type="text" value={this.state.email} onChange={this.updateEmail.bind(this)} />
                Name:
                <input type="text" value={this.state.name} onChange={this.updateName.bind(this)} />
                Number:
                <input type="number" value={this.state.number} onChange={this.updateNumber.bind(this)} />
                <hr/>

                <button onClick={this.save.bind(this)}>
                    Save
                </button>
            </div>
        );
    }

}

export default Form3;