import { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';
import * as S from './AddTodoStyle'

function AddTodo() {
  const {
    inputText,
    setInputText,
    handleSubmit,
    addTodo,
  } = useContext(TodoContext)
  
  return (
    <S.AddTodoForm onSubmit={handleSubmit}>
      <S.AddTodoInput type='text'  placeholder='새로운 할 일을 입력하세요.' value={inputText} onChange={(e) => setInputText(e.target.value)} />
      <S.AddTodoButton type='submit'  onClick={() => addTodo()}>+</S.AddTodoButton>
    </S.AddTodoForm>
  )
}

export default AddTodo;