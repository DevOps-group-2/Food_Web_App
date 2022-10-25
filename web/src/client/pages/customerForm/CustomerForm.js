// followed this guidehttps://www.geeksforgeeks.org/how-to-create-a-form-in-react/
//todo gør det mere interaktivt. https://dev.to/nsebhastian/react-form-real-time-validation-using-state-1eeg
//todo gør sådan der nogle felter der kan skippes samt andre ikke kan.
//todo tilføj validations

import {useState} from "react";
//import './CustomerForm.css';

function CustomerForm(){
    const [date , setDate] = useState('');
    const [time , setTime] =    useState('');
    const [name , setName] = useState('');
    const [phoneNumber , setPhoneNumber] = useState('');
    const [email , setEmail] = useState('');
    const [comment , setComment] = useState('');

    // function to update state of date with
    // value is entered by the user in the form
    const handleDateChange =(e)=>{
        setDate(e.target.value);
    }
    // function to update state of time with
    // value is entered by the user in the form
    const handleTimeChange =(e)=>{
        setTime(e.target.value);
    }
    // function to update state of name with
    // value is entered by the user in the form
    const handleNameChange =(e)=>{
        setName(e.target.value);
    }
    // function to update state of phone number with
    // value is entered by the user in the form
    const handlePhoneNumberChange =(e)=>{
        setPhoneNumber(e.target.value);
    }
    // function to update state of email with
    // value is entered by the user in the form
    const handleEmailChange =(e)=>{
        setEmail(e.target.value);
    }
    // function to update state of comment with
    // value is entered by the user in the form
    const handleCommentChange =(e)=>{
        setComment(e.target.value);
    }
    // below function will be called when user
    // click on submit button .
    const handleSubmit=(e)=>{
        // display alert box with user
        // 'name' and 'email' details for now todo all other details too maybe even a ordernumber.
        alert(`Your state values: \n 
            name: ${name} \n 
            email: ${email}`)
    }
    return(
        <div className="App">
            <header className="App-header">
            <form onSubmit={(e) =>{handleSubmit(e)}}>
                {/*when user submit the form , handleSubmit() function will be called .*/}
                <label >
                    Date:
                </label><br/>
                <input type="text" value={date} required onChange={(e)=> {handleDateChange(e)}} /><br/>
                { /*when user write in name input box , handleChange() function will be called. */}

                <label >
                    Time:
                </label><br/>
                <input type="text" value={time} required onChange={(e)=> {handleTimeChange(e)}} /><br/>
                { /*when user write in name input box , handleChange() function will be called. */}

                <label >
                    Name:
                </label><br/>
                <input type="text" value={name} required onChange={(e)=> {handleNameChange(e)}} /><br/>
                { /*when user write in name input box , handleChange() function will be called. */}

                <label >
                    Phone Number:
                </label><br/>
                <input type="text" value={phoneNumber} required onChange={(e)=> {handlePhoneNumberChange(e)}} /><br/>
                { /*when user write in name input box , handleChange() function will be called. */}

                <label >
                    Email:
                </label><br/>
                <input type="text" value={email} required onChange={(e)=> {handleEmailChange(e)}} /><br/>
                { /*when user write in name input box , handleChange() function will be called. */}

                <label >
                    Comment:
                </label><br/>
                <input type="text" value={comment} required onChange={(e)=> {handleCommentChange(e)}} /><br/>
                { /*when user write in name input box , handleChange() function will be called. */}
                <input type="submit" value="Submit"/>
        </form>
            </header>
        </div>
    )
}
export default CustomerForm;