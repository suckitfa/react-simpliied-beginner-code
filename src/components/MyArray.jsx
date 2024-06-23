import { useState } from "react"
import './MyArray.css'

const initLetters = () => ['A', 'B', 'C']

function MyArray() {
    const [letters, setLetters] = useState(initLetters)
    const [targetLetter, setTargetLetter] = useState('')
    const [addLetter, setAddLetter] = useState('')
    const removeFirst = () => {
        // const l = letters.slice()
        // l.shift()
        // setLetters(l)
        setLetters(curLetters => {
            return curLetters.slice(1)
        })
    }
    const removeTarget = () => {
        if (!targetLetter) {
            window.alert('Removed Letter should not be empty!')
            return
        }
        const l = letters.slice().filter(i => i !== targetLetter)
        setLetters(l)
    }

    const handleAddLetter = () => {
        if (!addLetter) {
            window.alert('Added Letter should not be empty!')
            return
        }

        const l = letters.slice()
        l.push(addLetter)
        setLetters(l)
    }
    return (
        <div className="remove-container">
            <p>
                Letter: {letters.join(",")}
            </p>
            <button onClick={removeFirst}>remove first</button>
            <p>
                <input type="text" value={targetLetter} onChange={(e) => setTargetLetter(e.target.value)} />
                <button onClick={removeTarget}>remove letter</button>
            </p>
            <p>
                <input type="text" value={addLetter} onChange={e => setAddLetter(e.target.value)} />
                <button onClick={handleAddLetter}>Add</button>
            </p>
            <button onClick={() => setLetters([])}>clear</button>
            <button onClick={() => setLetters(initLetters)}>reset</button>
        </div>
    )
}

export default MyArray;