import React, {Component} from 'react';
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

//Include Sweetalert
import Swal from 'sweetalert2';

//axios for api request
import axios from 'axios';

class Form2 extends Component{
    constructor(props)
    {
        super(props);
        this.addFormData = this.addFormData.bind(this);
    }
    //Form Submission
    addFormData(evt)
    {
        evt.preventDefault();
        const fd = new FormData();
        fd.append('myUsername', this.refs.myUsername.value);
        fd.append('myEmail', this.refs.myEmail.value);
        fd.append('myAdd1', this.refs.myAdd1.value);
        fd.append('myAdd2', this.refs.myAdd2.value);
        fd.append('myCity', this.refs.myCity.value);
        fd.append('myState', this.refs.myState.value);
        fd.append('myZip', this.refs.myZip.value);

        axios.post('http://localhost/reactimageupload.php', fd
        ).then(res=>
            {

                //Success alert
                Swal.fire({
                    title: 'Therichpost',
                    text: res.data.data,
                    icon: 'success',

                });
                this.myFormRef.reset();

            }
        );
    }

    render() {

        return (
            <div className="App container mt-5">

                <h1 className="text-center mt-2 mb-2">Reactjs Save User Register Form Data in phpmysql database</h1>
                <form class="row g-3" ref={(el) => this.myFormRef = el}>
                    <div class="col-md-6">
                        <label for="inputEmail4" class="form-label">Email</label>
                        <input type="email" class="form-control" id="inputEmail4" ref="myEmail" required />
                    </div>
                    <div class="col-md-6">
                        <label for="inputUsername4" class="form-label">Username</label>
                        <input type="text" class="form-control" id="inputUsername4" ref="myUsername" required />
                    </div>
                    <div class="col-12">
                        <label for="inputAddress" class="form-label">Address</label>
                        <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" ref="myAdd1" required />
                    </div>
                    <div class="col-12">
                        <label for="inputAddress2" class="form-label">Address 2</label>
                        <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" ref="myAdd2" required />
                    </div>
                    <div class="col-md-6">
                        <label for="inputCity" class="form-label">City</label>
                        <input type="text" class="form-control" id="inputCity" ref="myCity" required />
                    </div>
                    <div class="col-md-4">
                        <label for="inputState" class="form-label">State</label>
                        <select id="inputState" class="form-select" ref="myState">
                            <option value="">Choose...</option>
                            <option value="PB">Punjab</option>
                        </select>
                    </div>
                    <div class="col-md-2">
                        <label for="inputZip" class="form-label">Zip</label>
                        <input type="text" class="form-control" id="inputZip" ref="myZip" required />
                    </div>
                    <div class="col-12">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="gridCheck" required />
                            <label class="form-check-label" for="gridCheck">
                                Check me out
                            </label>
                        </div>
                    </div>
                    <div class="col-12">
                        <button type="submit" class="btn btn-primary" onClick={this.addFormData}>Submit</button>
                    </div>
                </form>
            </div>
        )
    };
}

export default Form2;