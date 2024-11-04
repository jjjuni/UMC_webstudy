import './AddTodo.css';
import { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';

function AddTodo() {
  const {
    inputText,
    setInputText,
    handleSubmit,
    addTodo,
  } = useContext(TodoContext)
  
  return (
    <form className='addTodo-form' onSubmit={handleSubmit}>
      <input type='text' className='addTodo-input' placeholder='새로운 할 일을 입력하세요.' value={inputText} onChange={(e) => setInputText(e.target.value)} />
      <button type='submit' className='addTodo-button' onClick={() => addTodo()}>+</button>
    </form>
  )
}

export default AddTodo;