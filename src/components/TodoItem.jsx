function TodoItem({
    isComplete, children
}) {
    return (
        <label >
            <input type="checkbox" defaultChecked={isComplete} />
            {children}
        </label>
    )
}

export default TodoItem;