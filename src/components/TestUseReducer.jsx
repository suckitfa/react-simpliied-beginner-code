import { useReducer } from "react";
const ACTIONS = {
    INCREMENT: "INCREMENT",
    DECREMENT: 'DECREMENT',
    RESET: 'RESET',
    CHANGE_COUNT: 'CHANGE_COUNT'
}
const reducer = (count, action) => {
    /**
     *  {type: "DECREMENT" }
     * */
    switch (action.type) {
        case ACTIONS.DECREMENT:
            return count - 1
        case ACTIONS.INCREMENT:
            return count + 1
        case ACTIONS.RESET:
            return 0
        case ACTIONS.CHANGE_COUNT:
            return action.payload.value
        default:
            return count
    }
}

function TestUseReducer({
    initialCount = 0
}) {
    const [count, dispatch] = useReducer(reducer, initialCount)
    return (
        <>
            <div>
                <button onClick={() => dispatch({ type: ACTIONS.INCREMENT })}>+</button>
                {count}
                <button onClick={() => dispatch({ type: ACTIONS.DECREMENT })}>-</button>
                <button
                    onClick={() => dispatch({ type: ACTIONS.RESET })}
                >reset</button>
                <button onClick={() => dispatch({
                    type: ACTIONS.CHANGE_COUNT,
                    payload: {
                        value: 5
                    }
                })}>set to 5</button>
            </div>
        </>
    )
}

export default TestUseReducer;