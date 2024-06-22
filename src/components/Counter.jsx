import { useState } from "react"

function Counter() {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1);
    }

    return (
        <button onClick={handleClick}>{count}</button>
    )
}

export default Counter;

// create a new component called Counter;
// have a state for counter that starts at 0 and render that in JSX
// when you click the number increment it by 1