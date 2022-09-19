import { useState } from 'react';
import { Button } from "react-bootstrap";
const orders = [100, 200, 300];
function InCrease() {

    // const [number, setNumber] = useState(0);
    const [counter, setCounter] = useState(() => {
        const total = orders.reduce((total, cur) => total + cur);
        console.log(total);
        return total
    }
    );

    const handleClickInCrease = () => {
        setCounter(counter + 1);
    }
    const handleClickDecrease = () => {
        setCounter(counter - 1);
    }
    // <div>
    //     <p>You clicked {number} times</p>
    //     <button style={{ padding: 10 }} onClick={() => setNumber(number + 1)}>
    //         InCrease
    //     </button>
    //     <button style={{ padding: 10, margin: 20 }} onClick={() => setNumber(number - 1)}>
    //         DeCrease
    //     </button>

    // </div>


    return (
        <div>
            <h1 >{counter}</h1>
            <Button variant='info' onClick={handleClickInCrease}>Increase</Button>{''}
            <Button style={{ margin: 20, }} onClick={handleClickDecrease}>Decrease</Button>{''}

        </div>

    );

}
export default InCrease;