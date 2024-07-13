import { useState } from "react"

export default function NeverStoreDerviedState() {
    const [items, setItems] = useState([1, 2, 3, 4, 5])
    const [filteredItems, setFilteredItems] = useState([])

    function updateFilteredItems(e) {
        if (e.target.value === "") {
            setFilteredItems(items)
        } else {
            setFilteredItems(items.filter(item => item < e.target.valueAsNumber))

        }
    }
    return (
        <>
            <label htmlFor="lessThan">Show Less Than</label>
            <input type="number" id="lessThan" onChange={updateFilteredItems} />
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