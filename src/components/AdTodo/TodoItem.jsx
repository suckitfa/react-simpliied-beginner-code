import { useContext } from "react"
import { TodoContext } from "."

export default function TodoItem({ id, name, completed }) {
    const {
        toggleTodo, deleteTodo, editTodo
    } = useContext(TodoContext)
    return (
        <li className="list-item">
            <label className="list-item-label">
                <input
                    checked={completed}
                    type="checkbox"
                    data-list-item-checkbox
                    onChange={e => toggleTodo(id, e.target.checked)}
                />
                <span data-list-item-text>{name}</span>
            </label>
            <button data-button-edit onClick={() => editTodo(id)}>Edit</button>
            <button onClick={() => deleteTodo(id)} data-button-delete>
                Delete
            </button>
        </li>
    )
}