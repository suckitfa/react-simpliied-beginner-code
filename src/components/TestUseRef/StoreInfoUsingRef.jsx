import { useRef } from "react"

function StoreInfoUsingRef() {
    const ref = useRef(0)
    const handleClick = () => {
        ref.current = ref.current + 1;
        alert('You clicked ' + ref.current + ' times!')
    }

    return (
        <>
            <h1>StoreInfoUsingRef</h1>
            <button onClick={handleClick}>Print RefVal</button>
        </>
    )
}

export default StoreInfoUsingRef