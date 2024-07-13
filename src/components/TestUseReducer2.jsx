import { useReducer } from "react"

const ACTIONS = {
    INCREMENT: 'INCREMENT',
    DECREMENT: 'DECREMENT',
    RESET: 'RESET',
    CHANGE_COUNT: 'CHANGE_COUNT'
}

const reducer = (count, action) => {
    switch (action.type) {
        case ACTIONS.INCREMENT:
            return count + 1
        case ACTIONS.DECREMENT:
            return count - 1
        case ACTIONS.RESET:
            return 0
        case ACTIONS.CHANGE_COUNT:
            return count + action.payload.value
        default:
            return count
    }
}

function TestUseReducer2() {
    const [count, dispatch] = useReducer(reducer, 0)
    return (
        <>
            {/* The action performed by the user. 
            It can be a value of any type.
             By convention, an action is usually an object with 
             a type property identifying it and, 
             optionally, 
            other properties with additional information. */}
            <button
                onClick={() => dispatch({
                    type: ACTIONS.INCREMENT
                })}
            >+</button>
            <span>{count}</span>
            <button
                onClick={() => dispatch({
                    type: ACTIONS.DECREMENT
                })}
            >-</button>
            <button onClick={() => dispatch({
                type: ACTIONS.RESET
            })}>reset</button>
            <button
                onClick={() => dispatch({
                    type: ACTIONS.CHANGE_COUNT,
                    payload: {
                        value: 5
                    }
                })}
            >change count</button>
        </>
    )
}

export default TestUseReducer2;