import { useState } from 'react';
import * as S from './AddTodoStyle'
import useCustomMutation from '../hooks/useCustomMutation';

function AddTodo() {
  
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  
  const [inputTitle, setInputTitle] = useState('');
  const [inputContent, setInputContent] = useState('');
  
  const mutate = useCustomMutation();

  const addTodo = async () => {
    if (inputTitle.trim()) {                   // 빈 칸 등록 방지
      setInputTitle('');
      setInputContent('');
      mutate({
        method: 'POST',
        url: import.meta.env.VITE_TODO,
        data : {
          title: inputTitle,
          content: inputContent,
          checked: false,
        },
      })
    }
  };

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

