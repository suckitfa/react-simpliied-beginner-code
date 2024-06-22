import TodoItem from "./TodoItem";
function TodoList({ todos }) {
    return (
        <ul>
            {todos.map((i, index) => (
                <li key={i.title}>
                    <TodoItem isComplete={index % 2}>{i.title}</TodoItem>
                </li>
            ))}
        </ul>
    )
}
export default TodoList;