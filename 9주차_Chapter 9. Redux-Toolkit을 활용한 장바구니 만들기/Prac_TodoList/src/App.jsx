import './App.css';
import './font.css';
import Header from './components/Header.jsx';
import AddTodo from './components/AddTodo.jsx';
import TodoList from './components/TodoList.jsx';
import TodoModal from './components/TodoModal.jsx';

function App() {

  return (
    <>
      <Header/>
      <AddTodo/>
      <TodoList/>
      <TodoModal/>
    </>
  )
}

export default App;