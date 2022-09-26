import { useState } from "react";
import { Button } from "react-bootstrap";


function CheckBox() {
    const [checkBox, setChecKBox] = useState([]);


    const HandleChane = (id) => {
        setChecKBox(prev => {
            const isChecked = checkBox.includes(id)
            if (isChecked) {
                return checkBox.filter(item => item !== id)
            } else {
                return [...prev, id]
            }
        })
    }
    const HandleClickCheckBox = () => {
        console.log({ id: checkBox })
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
                <div key={course.id} >
                    <input
                        type="checkbox"
                        checkBox={checkBox.includes(course.id)}
                        onChange={() => HandleChane(course.id)}
                    />{course.name}
                </div>
            ))}
            <Button
                variant="outline-info"
                onClick={HandleClickCheckBox}
            >Submit
            </Button>
        </div >
    );
}
export default CheckBox;