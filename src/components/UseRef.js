import { useEffect, useState, useRef } from "react";
import { Button } from "react-bootstrap";
function UseRef() {
    const [count, setCount] = useState(60)

    const TimeId = useRef();
    const prevCount = useRef();

    useEffect(() => {
        prevCount.current = count;
    }, [count])

    const handleClickStart = () => {
        TimeId.current = setInterval(() => {
            setCount(prevCount => prevCount - 1)
        }, 1000)

        console.log("start", TimeId)
    }

    const handleClickStop = () => {
        clearInterval(TimeId.current);

        console.log("stop", TimeId)
    }

    console.log(count, prevCount.current)

    return (
        <div style={{ padding: 30 }}>
            <h1>{count}</h1>
            <Button onClick={handleClickStart} variant="info">Start</Button>
            <Button onClick={handleClickStop} variant="danger">Stop</Button>
        </div>
    );
}
export default UseRef;