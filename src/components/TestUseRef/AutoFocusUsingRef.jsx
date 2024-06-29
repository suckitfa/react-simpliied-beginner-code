import { useEffect, useRef } from "react";

function AutoFocusUsingRef() {
    const inputRef = useRef()
    useEffect(() => {
        inputRef.current.focus()
    }, [])
    const handleClick = () => {
        inputRef.current.focus()
    }
    return (
        <>
            <h3>AutoFocusUsingRef</h3>
            <input type="text" ref={inputRef} />
            <button onClick={handleClick}>Focus</button>
        </>
    )
}

export default AutoFocusUsingRef;