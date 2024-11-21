import { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';
import * as S from './AddTodoStyle'

function AddTodo() {
  const {
    inputTitle,
    setInputTitle,
    inputContent,
    setInputContent,
    handleSubmit,
    addTodo,
  } = useContext(TodoContext)
  
  return (
    <S.AddTodoForm onSubmit={handleSubmit}>
      <S.InputWrapper>
        <S.AddTodoInput type='text' placeholder='제목을 입력하세요.' value={inputTitle} onChange={(e) => setInputTitle(e.target.value)} />
        <S.AddTodoInput type='text' placeholder='내용을 입력하세요.' value={inputContent} onChange={(e) => setInputContent(e.target.value)} />
      </S.InputWrapper>
      <S.AddTodoButton type='submit' onClick={() => addTodo()}>+</S.AddTodoButton>
    </S.AddTodoForm>
  )
}

export default AddTodo;

