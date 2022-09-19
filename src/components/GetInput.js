import { useState } from "react";

function GetInput() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const HandleSubmit = () => {
        console.log(
            {
                name,
                email
            }
        )
    }

    console.log(name)
    return (
        <div style={{ padding: 30 }} >

            <input style={{ padding: 5 }}
                value={name}
                onChange={e => setName(e.target.value)}
            />
            <input style={{ padding: 5 }}
                value={email}
                onChange={e => setEmail(e.target.value)}
            />
            <button style={{ padding: 5 }} onClick={HandleSubmit}>Submit</button>
        </div>

    );
}
export default GetInput;