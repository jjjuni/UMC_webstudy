import './TodoList.css';
import DeleteButton from './TodoList/DeleteButton.jsx'
import UpdateButton from './TodoList/UpdateButton.jsx'
import TodoTask from './TodoList/TodoTask.jsx';
import { useContext } from 'react';
import { TodoContext } from '../context/TodoContext.jsx';

function TodoList() {
  const {
    todos,
  } = useContext(TodoContext)
  return (
    <>
      {todos.map((todo) => (
        <div className='todo-box' key={todo.id}>

          <TodoTask todo={todo}/>

          <div className='todo-buttons'>
            <DeleteButton todo={todo}/>
            <UpdateButton todo={todo}/>
          </div>
        </div>
      ))}
    </>
  );
}

export default TodoList;