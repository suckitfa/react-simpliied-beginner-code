import { useCallback, useEffect, useState } from "react";

function index() {
    const [name, setName] = useState('')
    const [age, setAge] = useState(0)
    const printName = useCallback(() => {
        console.log('name = ', name)
    }, [name])

    // function printName() {
    //     console.log('name = ', name)
    // }

    useEffect(() => {
        console.log('In Effect')
        printName()
    }, [printName])

    return (
        <>
            <label>
                Name:
                <input type="text" value={name} onChange={e => setName(e.target.value)} />
            </label>
            <br />
            <label >
                Age:
                <input type="number" value={age} onChange={e => setAge(e.target.value)} />
            </label>
        </>
    )
}

export default index;