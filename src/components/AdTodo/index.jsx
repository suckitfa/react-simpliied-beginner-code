import { createContext, useEffect, useReducer, useState, } from "react"
import TodoList from "./TodoList"
import "./styles.css"
import NewTodoForm from './NewTodoForm'
import TodoFilterForm from './TodoFilterForm'

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
        case ACTIONS.EDIT:
            return todos.map(todo => {
                if (todo.id === payload.id) {
                    return {
                        ...todo,
                        name: payload.name
                    }
                } else {
                    return todo;
                }
            })
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

export const TodoContext = createContext()

function App() {

    const [todos, dispatch] = useReducer(reducer, [], initialValue => {
        const value = localStorage.getItem(LOCAL_STORAGE_KEY)
        if (value == null) return initialValue
        return JSON.parse(value)
    });

    const [filterName, setFilterName] = useState('')
    const [hideCompletedFilter, setHideCompletedFilter] = useState(false) // 是否隐藏completed

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
    }, [todos])

    const filterTodos = todos.filter(todo => {
        if (hideCompletedFilter && todo.completed) return false;
        return todo.name.includes(filterName)
    })

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

    function editTodo(id, name) {
        dispatch({
            type: ACTIONS.EDIT,
            payload: {
                id,
                name
            }
        })
    }
    return (
        <TodoContext.Provider value={{
            todos: filterTodos,
            toggleTodo,
            deleteTodo,
            addNewTodo,
            editTodo
        }}>
            <TodoFilterForm
                name={filterName}
                setName={setFilterName}
                hideCompleted={hideCompletedFilter}
                setHideCompleted={setHideCompletedFilter}
            />

            <TodoList />

            <NewTodoForm />
        </TodoContext.Provider>
    )
}

export default App