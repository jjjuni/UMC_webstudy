import { useState } from 'react';
import './App.css';
import Header from './components/Header.jsx';
import AddTodo from './components/AddTodo.jsx';
import TodoList from './components/TodoList.jsx';

function App() {
  const [todos, setTodos] = useState([]);

  return (
    <>
      <Header />
      <AddTodo setTodos={setTodos}/>
      <TodoList todos={todos} setTodos={setTodos}/>
    </>
  )
}

export default App;