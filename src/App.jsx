import React from 'react'
import TodoList from './components/TodoList'
import './App.css'
import MyName from './components/NameFun'
import userData from './components/UserCard/user.json'
import UserCard from './components/UserCard'
import TestUseState from './components/TestUserState'
import Counter from './components/Counter'
import MyInput from './components/MyInput'
import MyCheckBox from './components/MyCheckBox'
import MyForm from './components/MyForm'
import MyClassComp from './components/MyClassComp'
import CounterClass from './components/CouterClass'
import MyInput2 from './components/MyInput2'
import MyArray from './components/MyArray'
import AgeName from './components/AgeName'
import MyUseEffect from './components/MyUseEffect'
import TestFetchData from './components/TestFetchData'
import RenderList from './components/RenderList'
import UserList from './components/UserList'
import SimpleTodoList from './components/SimpleTodoList'
import TestUseRef from './components/TestUseRef'
import TestUseMemo from './components/TestUseMemo'
import TestUseCallback from './components/TestUseCallback'
function App() {
  const todos = [
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
      {/* <MyName name={'my name'} age={19} isProgrammer={true}></MyName> */}
      {/* <h1>Todo List</h1> */}
      {/* <TodoList todos={todos}></TodoList> */}
      {/* User Card */}
      {/* <UserCard {...userData}></UserCard> */}
      {/* <TestUseState></TestUseState> */}
      {/* <Counter></Counter> */}
      {/* <MyInput></MyInput> */}
      {/* <MyCheckBox></MyCheckBox> */}
      {/* <MyForm></MyForm> */}
      {/* <MyClassComp></MyClassComp> */}
      {/* <CounterClass></CounterClass> */}
      {/* <MyInput2></MyInput2> */}
      {/* <MyArray></MyArray> */}
      {/* <AgeName></AgeName> */}
      {/* <MyUseEffect></MyUseEffect> */}
      {/* <TestFetchData></TestFetchData> */}
      {/* <RenderList></RenderList> */}
      {/* <UserList></UserList> */}
      {/* <SimpleTodoList></SimpleTodoList> */}
      {/* <TestUseRef></TestUseRef> */}
      {/* <TestUseMemo></TestUseMemo> */}
      <TestUseCallback></TestUseCallback>
    </div>
  )
}

export default App
