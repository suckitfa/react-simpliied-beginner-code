import { useState } from "react";

function slowGetter() {
    console.log('State setter!')
    return 'Kyle'
}

function TestUseState() {
    const [name, setName] = useState('Cooper')
    const [age, setAge] = useState(11);

    console.log('render ', name)

    function handleClick() {
        setName('Sally')
        // setAge(age + 1)
        // setAge(age + 1)
        // setAge(age + 1)
        // setAge(age + 1)
        // setAge(age + 1)
        setAge(curAge => {
            return curAge + 1;
        })

        setAge(curAge => {
            return curAge + 1;
        })

        setAge(curAge => {
            return curAge + 1;
        })

    }

    function handleAge() {
    }

    return (
        <div>
            <button onClick={handleClick}>change name</button>
            <h2>Hi,{name}</h2>
            <h3 onClick={handleAge}>Age: {age}</h3>
        </div>
    )
}

export default TestUseState;