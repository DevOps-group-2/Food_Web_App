import {useState} from "react";


async function Form4() {
    const [id, setId] = useState("");
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [number, setNumber] = useState("");
    const [message, setMessage] = useState("");


    /*
    let handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let res = await fetch("https://localhost:8080/api/data/test", {
                method: "POST",
                body: JSON.stringify({
                    email: email.value,
                    name: name.value,
                    number: number.value,
                }),
            });
            let resJson = await res.json();
            if (res.status === 200) {
                setName("");
                setEmail("");
                setNumber("");
                setMessage("User created successfully");
            } else {
                setMessage("Some error occured");
            }
        } catch (err) {
            console.log(err);
        }
    };

     */

    // POST request using fetch with async/await
    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            email: email,
            name: name,
            number: number})
    };
    const response = await fetch('https://localhost:8080/api/data', requestOptions);
    const data = await response.json();
    this.setState({
        setEmail: data.email,
        setName: data.name,
        setNumber: data.number
    });

    return (
        <div className="App">
            <form onSubmit={requestOptions}>
                <input
                    type="text"
                    value={email}
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="text"
                    value={name}
                    placeholder="Name"
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="text"
                    value={number}
                    placeholder="Number"
                    onChange={(e) => setNumber(e.target.value)}
                />

                <button type="submit">Create</button>

                <div className="message">{message ? <p>{message}</p> : null}</div>
            </form>
        </div>
    );
}
export default Form4;