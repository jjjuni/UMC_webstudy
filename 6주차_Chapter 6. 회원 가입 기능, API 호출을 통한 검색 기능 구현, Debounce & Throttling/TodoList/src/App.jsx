import './App.css';
import Header from './components/Header.jsx';
import AddTodo from './components/AddTodo.jsx';
import TodoList from './components/TodoList.jsx';

function App() {
  return (
    <>
      <Header />
      <AddTodo/>
      <TodoList/>
    </>
  )
}

export default App;