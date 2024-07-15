import { useEffect, useReducer, useState } from "react"
import "./styles.css"
import { TodoItem } from "./TodoItem"
import NewTodoForm from './NewTodoForm'
const ACTIONS = {
    ADD: 'ADD',
    EDIT: 'EDIT',
    DELETE: 'DELETE',
    TOGGLE: 'TOGGLE'
}

const LOCAL_STORAGE_KEY = 'TODOS'

function reducer(todos, { type, payload }) {
    switch (type) {
        case ACTIONS.ADD:
            return [
                ...todos,
                payload.value
            ]
        case ACTIONS.DELETE:
            return todos.filter(todo => todo.id !== payload.id)
        case ACTIONS.TOGGLE:
            return todos.map(todo => {
                if (todo.id === payload.id) {
                    return {
                        ...todo,
                        completed: !todo.completed
                    }
                } else {
                    return todo;
                }
            });
        default:
            throw new Error('Action not found!')
    }
}

function App() {

    const [todos, dispatch] = useReducer(reducer, [], initialValue => {
        const value = localStorage.getItem(LOCAL_STORAGE_KEY)
        if (value == null) return initialValue
        return JSON.parse(value)
    });

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
    }, [todos])

    function addNewTodo(newTodoName) {
        dispatch({
            type: ACTIONS.ADD,
            payload: {
                value: {
                    name: newTodoName, completed: false, id: crypto.randomUUID()
                }
            }
        })
    }

    function toggleTodo(todoId) {
        dispatch({
            type: ACTIONS.TOGGLE,
            payload: {
                id: todoId,
            }
        })
    }

    function deleteTodo(todoId) {
        dispatch({
            type: ACTIONS.DELETE,
            payload: {
                id: todoId
            }
        })
    }

    return (
        <>
            <div className="filter-form">
                <div className="filter-form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" value="" />
                </div>
                <label>
                    <input type="checkbox" />
                    Hide Completed
                </label>
            </div>
            <ul id="list">
                {todos.map(todo => {
                    return (
                        <TodoItem
                            key={todo.id}
                            {...todo}
                            toggleTodo={toggleTodo}
                            deleteTodo={deleteTodo}
                        />
                    )
                })}
            </ul>

            <NewTodoForm addNewTodo={addNewTodo}></NewTodoForm>
        </>
    )
}

export default App