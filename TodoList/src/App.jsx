import './App.css';
import './font.css';
import Header from './components/Header.jsx';
import AddTodo from './components/AddTodo.jsx';
import TodoList from './components/TodoList.jsx';
import TodoModal from './components/TodoModal.jsx';
import { useContext } from 'react';
import { TodoContext } from './context/TodoContext.jsx';

function App() {
  // const {
  //   todo,
  // } = useContext(TodoContext);

  return (
    <>
      <Header/>
      <AddTodo/>
      <TodoList/>
      <TodoModal/>
      {/* <TodoModal todo={todo}/> */}
    </>
  )
}

export default App;