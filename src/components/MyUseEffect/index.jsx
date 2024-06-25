import { useEffect, useState } from "react"

function Index() {
    const [age, setAge] = useState(0)
    const [name, setName] = useState('Bob')
    console.log('Render')

    useEffect(() => {
        // console.log('Hi')
        // return console.log('Bye')
    }, [])

    useEffect(() => {
        // console.log(`My name is ${name}, and I am ${age} years old.`)
    }, [name, age])

    useEffect(() => {
        document.title = name
    }, [name])
    return (
        <div>
            <button>Show/Hide</button>
            <input type="text" value={name} onChange={e => setName(e.target.value)} />
            <p>
                <button onClick={() => setAge(age - 1)}>-</button>
                {age}
                <button onClick={() => setAge(age + 1)}>+</button>
            </p>
            <p>My name is {name}, and I am {age} years old.</p>
        </div>
    )
}

export default Index;