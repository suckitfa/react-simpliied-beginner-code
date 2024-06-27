import { useState } from "react";
function RenderList() {
    const getNewItem = () => ({ id: crypto.randomUUID(), name: 'New item' });
    const [items, setItems] = useState([
        getNewItem(),
        getNewItem()
    ])

    const addItem = () => {
        setItems(curItems => [...curItems, getNewItem()])
    }
    return (
        <div>
            <button onClick={addItem}>Add Item</button>
            <pre>
                {
                    items.map(item => (<div key={item.id}>
                        <span>{item.name}</span>
                        <input type="text" />
                    </div>))
                }
            </pre>
        </div>
    )
}

export default RenderList;