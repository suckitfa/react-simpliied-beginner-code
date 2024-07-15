import { useContext } from "react"
import { TodoContext } from "./index"
import TodoItem from "./TodoItem"
export default function TodoList() {
    const { todos } = useContext(TodoContext)
    return (
        <ul id="list">
            {todos.map(todo => {
                return (
                    <TodoItem
                        key={todo.id}
                        {...todo}
                    // toggleTodo={toggleTodo}
                    // deleteTodo={deleteTodo}
                    />
                )
            })}
        </ul>
    )
}