import {useState} from "react";


function Form4() {
    const [id, setId] = useState("");
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [number, setNumber] = useState("");
    const [message, setMessage] = useState("");

    let onCreateEmployee;
    onCreateEmployee=()=>{
        let empInfo={
            Id:this.refs.Id.value,
            Name:this.refs.Name.value,
            Location:this.refs.Location.value,
            Salary:this.refs.Salary.value

        };
    }
    let handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let res = await fetch("https://localhost:8080/api/data", {
                method: "POST",
                body: JSON.stringify({
                    id: id,
                    email: email,
                    name: name,
                    number: number,
                }),
            });
            let resJson = await res.json();
            if (res.status === 200) {
                setId("");
                setName("");
                setEmail("");
                setMessage("User created successfully");
            } else {
                setMessage("Some error occured");
            }
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="App">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={id}
                    placeholder="id"
                    onChange={(e) => setId(e.target.value)}
                />
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