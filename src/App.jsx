import React, { createContext, useEffect, useState } from 'react'
import TodoList from './components/TodoList'
// import './App.css'
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
import SelfHooks from './components/SelfHooks'
import TestUseFetch from './components/TestUseFetch'
import TestUseArray from './components/TestUseArray'
import TestUseLocalStorage from './components/TestUseLocalStorage'
import FormValidation from './components/FormValidation'
import TestUseReactHookForm from './components/TestReactHookForm/index.jsx'
import TestUseReducer2 from './components/TestUseReducer2.jsx'
import TestUseConText from './components/TestUseContext'
import NeverStoreDerviedState from './components/NeverStoreDerviedState.jsx'
import TestUseEnvVar from './components/TestUseEnvVar.jsx'
export const ThemeContext = createContext()

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
  const [isDarkMode, setIsDarkMode] = useState(false)
  function toggleTheme() {
    setIsDarkMode(d => !d)
  }
  useEffect(() => {
    document.body.style.background = isDarkMode ? '#333' : 'white'
    document.body.style.color = isDarkMode ? 'white' : '#333'
  }, [isDarkMode])

  return (
    <ThemeContext.Provider value={{
      isDarkMode,
      toggleTheme
    }}>
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
      {/* <TestUseCallback></TestUseCallback> */}
      {/* <SelfHooks></SelfHooks> */}
      {/* <TestUseFetch></TestUseFetch> */}
      {/* <TestUseArray></TestUseArray> */}
      {/* <TestUseLocalStorage></TestUseLocalStorage> */}
      {/* <FormValidation></FormValidation> */}
      {/* <TestUseReactHookForm></TestUseReactHookForm> */}
      {/* <TestUseReducer2></TestUseReducer2> */}
      {/* <TestUseConText></TestUseConText> */}
      {/* <NeverStoreDerviedState></NeverStoreDerviedState> */}
      <TestUseEnvVar></TestUseEnvVar>
    </ThemeContext.Provider >
  )
}

export default App
