import './App.css';
import './font.css';
import Header from './components/Header.jsx';
import AddTodo from './components/AddTodo.jsx';
import TodoList from './components/TodoList.jsx';
import TodoModal from './components/modal/TodoModal.jsx';
import { useContext } from 'react';
import { TodoContext } from './context/TodoContext.jsx';
import ModalPortal from './components/modal/ModalPortal.jsx';

function App() {
  // const {
  //   todo,
  // } = useContext(TodoContext);

  return (
    <>
      <Header/>
      <AddTodo/>
      <TodoList/>
      <ModalPortal>
        <TodoModal/>
      </ModalPortal>
      {/* <TodoModal todo={todo}/> */}
    </>
  )
}

export default App;