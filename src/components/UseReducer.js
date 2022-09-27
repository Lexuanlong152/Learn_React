import { useReducer } from "react";
const initalState = 0;

const UP_ACTION = 'up';
const DOWN_ACTION = 'down'

const reducer = (state, action) => {
    switch (action) {
        case UP_ACTION:
            return state + 1
        case DOWN_ACTION:
            return state - 1
        default:
            return state
    }
}
function UseReducer() {

    const [count, dispatch] = useReducer(reducer, initalState)

    return (
        <div style={{ padding: '10px 30px' }}>
            <h1>{count}</h1>
            <button
                onClick={() => dispatch(UP_ACTION)}
            >UP
            </button>
            <button
                onClick={() => dispatch(DOWN_ACTION)}
            >DOWN
            </button>

        </div>
    );
}
export default UseReducer;