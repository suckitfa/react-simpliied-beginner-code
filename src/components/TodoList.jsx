function TodoList({ todos }) {
    return (
        <ul>
            {
                todos.map(i => (<li>{i.title}</li>))
            }
        </ul>
    )
}
export default TodoList;