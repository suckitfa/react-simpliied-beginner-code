import { useContext, useRef } from "react";
import { TodoContext } from "./index";

export default function NewTodoForm() {
    const nameRef = useRef()
    const { addNewTodo } = useContext(TodoContext)

    function handleSubmit(e) {
        e.preventDefault()
        if (nameRef.current.value === '') return

        addNewTodo(nameRef.current.value)

        nameRef.current.value = ""
    }

    return (
        <form onSubmit={handleSubmit} id="new-tdo-form">
            <label htmlFor="todo-input">New Todo</label>
            <input type="text" id="todo-input" ref={nameRef} />
            <button>Add Todo</button>
        </form>
    )

}