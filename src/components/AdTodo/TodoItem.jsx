import { useContext, useState } from "react"
import { TodoContext } from "."

export default function TodoItem({ id, name, completed }) {
    const {
        toggleTodo, deleteTodo, editTodo
    } = useContext(TodoContext)
    const [isEditing, setIsEdting] = useState(false)

    return (
        <li className="list-item">
            <label className="list-item-label">
                <input
                    checked={completed}
                    type="checkbox"
                    data-list-item-checkbox
                    onChange={e => toggleTodo(id, e.target.checked)}
                />
                {/* editig a todo name */}
                {
                    isEditing ?
                        <input
                            autoFocus={true}
                            onBlur={() => setIsEdting(false)}
                            type="text"
                            value={name}
                            onChange={e => editTodo(id, e.target.value)} />
                        :
                        <span data-list-item-text>{name}</span>
                }
            </label>
            <button data-button-edit onClick={() => setIsEdting(true)}>Edit</button>
            <button onClick={() => deleteTodo(id)} data-button-delete>
                Delete
            </button>
        </li>
    )
}