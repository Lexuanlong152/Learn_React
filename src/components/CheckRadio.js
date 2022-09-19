import { useState } from "react";

function CheckRadio() {
    const [checked, setChecked] = useState(1)
    console.log(checked)
    const HandleClick = () => {
        console.log({ id: checked })
    }
    const course = [
        {
            id: 1,
            name: "Javascript"
        },
        {
            id: 2,
            name: "Python"
        },
        {
            id: 3,
            name: "PHP"
        }
    ]
    return (
        <div style={{ padding: 30 }}>
            {course.map(course => (
                <div key={course.id}>
                    <input
                        type="radio"
                        checked={checked === course.id}
                        onChange={() => setChecked(course.id)}

                    />
                    {course.name}

                </div>
            ))}
            <button style={{ padding: 5 }} onClick={HandleClick}>Submit</button>
        </div>
    );
}
export default CheckRadio;