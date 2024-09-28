import { useState } from 'react';
import './TodoList.css';
import PropTypes from 'prop-types';

function TodoList({todos, setTodos}) {
    
  const [editingId, setEditingId] = useState('')

  const [editText, setEditText] = useState('')

// todo 삭제
  const deleteTodo = (id) => {      
    setTodos((prev) => prev.filter((item) => item.id !== id));
  };

// todo 수정
  const updateTodo = (id, text) => {
    setTodos((prev) => 
      prev.map((item) => (item.id === id ? {...item, task: text} : item))
    );
    setEditingId('');
  };

// 수정 버튼을 눌렀을 때 (편집 id, 편집 text 설정)
  const clickUpdate = (todo) => {
    setEditingId(todo.id)
    setEditText(todo.task)
  }

  return (
    <>
      {todos.map((todo) => (
        <div className='todo-box' key={todo.id}>

          {editingId !== todo.id && (
            <p className='todo-task'>{todo.task}</p>
          )}

          {editingId === todo.id && (
            <input className='todo-task-input' defaultValue={todo.task} onChange={(e) => setEditText(e.target.value)} />
          )}

          <div className='todo-buttons'>
            <button className='delete-button button' onClick={() => deleteTodo(todo.id)}>삭제</button>

            {editingId === todo.id ? (
              <button className='update-button button' onClick={() => updateTodo(editingId, editText)}>완료</button>
              ) : (
              <button className='update-button button' onClick={() => clickUpdate(todo)}>수정</button>
            )}
          </div>
        </div>
      ))}
    </>
  )
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