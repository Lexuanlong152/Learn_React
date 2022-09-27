import { useState, useCallback } from "react";
import Memo from "./Memo";

function UseCallback() {
    const [count, setCount] = useState(0);

    const handleIncrease = useCallback(() => {
        setCount(prevCount => prevCount + 1);
    }, [])

    return (
        <div style={{ padding: '20 30' }}>
            <Memo onIncrease={handleIncrease} />
            <h1 >{count}</h1>
        </div >
    );
}
export default UseCallback;