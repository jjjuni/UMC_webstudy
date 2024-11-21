import './App.css';
import './font.css';
import Header from './components/Header.jsx';
import AddTodo from './components/AddTodo.jsx';
import TodoList from './components/TodoList.jsx';
import TodoDetail from './components/TodoDetail.jsx';
import { useContext } from 'react';
import { TodoContext } from './context/TodoContext.jsx';

function App() {
  const { 
    todo,
  } = useContext(TodoContext);

  return (
    <>
      <Header/>
      <AddTodo/>
      <TodoList/>
      <TodoDetail todo={todo}/>
    </>
  )
}

export default App;