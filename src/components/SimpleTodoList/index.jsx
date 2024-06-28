import { useState } from 'react';
import './index.css'
function Index() {
    const getRandomChecked = () => {
        var array = new Uint32Array(10);
        const [val] = crypto.getRandomValues(array)
        return val % 2
    }

    const [todos, setTodos] = useState([
        {
            name: 'item 1',
            checked: getRandomChecked(),
            id: crypto.randomUUID()
        }
    ]);
    const [name, setName] = useState('')

    const addBtnClick = () => {
        if (!name) {
            // window.alert('Name should not be empty!')
            return
        }
        setTodos(curTodos => [...curTodos, {
            name,
            checked: getRandomChecked(),
            id: crypto.randomUUID(),
        }])
        setName('')
    }

    const delTodo = (id) => {
        setTodos(curTodos => curTodos.filter(todo => todo.id !== id))
    }

    const toggleTodo = (id) => {
        setTodos(curTodos => curTodos.map(todo => ({
            ...todo,
            checked: !todo.checked
        })))
    }
    return (
        <>
            <h1>Simple Todo List</h1>

            <ul className="list-item">
                {todos.map((todo, index) => (<TodoItem
                    toggleTodo={toggleTodo}
                    delTodo={delTodo} key={todo.id} index={index} {...todo}></TodoItem>))}
            </ul>

            <div id="new-todo-form">
                <label for="todo-input">New Todo</label>
                <input type="text" id="todo-input" value={name} onChange={e => setName(e.target.value)} />
                <button onClick={addBtnClick}>Add Todo</button>
            </div>
        </>
    )
}

function TodoItem({
    name,
    checked,
    id,
    delTodo,
    toggleTodo,
}) {
    return (
        <li className="list-item">
            <label className="list-item-label">
                <input type="checkbox" data-list-item-checkbox checked={checked} onChange={() => toggleTodo(id)} />
                <span data-list-item-text>{name}</span>
            </label>
            <button data-button-delete onClick={() => delTodo(id)}>Delete</button>
        </li>
    )
}
export default Index;