import React from 'react'
import TodoList from './components/TodoList'
import './App.css'
import MyName from './components/NameFun'
function App() {
  const todos = [
    {
      title: "todo1"
    }
  ]
  const initTodos = () => {
    for (let i = 0; i < 10; i++) {
      todos.push({
        title: 'todo' + i
      })
    }
  }
  initTodos();

  return (
    <div>
      <MyName></MyName>
      <h1>Todo List</h1>
      <TodoList todos={todos}></TodoList>
    </div>
  )
}

export default App
