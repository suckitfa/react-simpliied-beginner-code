import React, { useState } from "react";
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
            {
                items.map(item => (<React.Fragment key={item.id}>
                    <div>
                        <span>{item.name}</span>
                        <input type="text" />
                    </div>
                </React.Fragment>))
            }
        </div >
    )
}

export default RenderList;