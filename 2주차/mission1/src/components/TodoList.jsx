import { useState } from 'react';
import './TodoList.css';
import PropTypes from 'prop-types';
import DeleteButton from './TodoList/DeleteButton.jsx'
import UpdateButton from './TodoList/UpdateButton.jsx'
import TodoTask from './TodoList/TodoTask.jsx';

function TodoList({todos, setTodos}) {

  const [editText, setEditText] = useState('');

  return (
    <>
      {todos.map((todo) => (
        <div className='todo-box' key={todo.id}>

          <TodoTask todo={todo} setEditText={setEditText}/>

          <div className='todo-buttons'>
            <DeleteButton todo={todo} setTodos={setTodos}/>
            <UpdateButton todo={todo} setTodos={setTodos} editText={editText} setEditText={setEditText}/>
          </div>
        </div>
      ))}
    </>
  );
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      task: PropTypes.string.isRequired,
    })
  ).isRequired,
  setTodos: PropTypes.func.isRequired,
};

export default TodoList;