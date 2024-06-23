import { useState, useEffect } from "react"

function Counter() {
    const [count, setCount] = useState(0);
    const [width, setWidth] = useState(window.innerWidth)
    const handleClick = () => {
        setCount(count + 1);
        // console.log('after called setCount ===> ', count)
    }

    useEffect(() => {
        // console.log('Mounted ===>')
        window.addEventListener('resize', () => {
            setWidth(window.innerWidth)
        })
        return () => window.removeEventListener('resise')
    }, [])

    return (
        <button onClick={handleClick}>{count},width = {width}</button>
    )
}

export default Counter;

// create a new component called Counter;
// have a state for counter that starts at 0 and render that in JSX
// when you click the number increment it by 1