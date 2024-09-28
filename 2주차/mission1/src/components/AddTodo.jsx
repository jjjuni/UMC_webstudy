import { useState } from 'react';
import './AddTodo.css';

function AddTodo({todos, setTodos}) {
  
  const [inputText, setInputText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  // todo 추가
  const addTodo = () => {         
    if (inputText.trim()){                   // 빈칸 등록 방지
      setTodos((prev) => [
        ...prev, 
        {id: Math.floor(Math.random() * 100) + 2, task: inputText}
      ]);
      setInputText('');
    }
  };

  return (
    <form className='addTodo-form' onSubmit={handleSubmit}>
      <input type='text' className='addTodo-input' placeholder='새로운 할 일을 입력하세요.' value={inputText} onChange={(e) => setInputText(e.target.value)} />
      <button type='submit' className='addTodo-button' onClick={() => addTodo()}>+</button>
    </form>
  )

}

export default AddTodo;