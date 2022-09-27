import { memo } from "react";

function Memo({ onIncrease }) {
    console.log('re-render')

    return (
        <button onClick={onIncrease}>Increase</button>

    );
}
export default memo(Memo);