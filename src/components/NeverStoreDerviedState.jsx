import { useState } from "react"

export default function NeverStoreDerviedState() {
    const [items, setItems] = useState([1, 2, 3, 4, 5])
    const [inputValue, setInputValue] = useState("")

    const filteredItems = inputValue ? items.filter(i => i < inputValue) : items
    return (
        <>
            <label htmlFor="lessThan">Show Less Than</label>
            <input
                type="number" id="lessThan" onInput={e => setInputValue(e.target.valueAsNumber)} value={inputValue} />
            <br />
            <br />
            <div>
                {
                    filteredItems.join(', ')
                }
            </div>
            <br />
            <button
                onClick={() => setItems(i => [...i, 2.5])}
            >Add 2.5 To List</button>
        </>
    )

}