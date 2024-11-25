import { useState, useContext } from "react";
import { TodoContext } from "../../context/TodoContext";
import * as S from "../TodoListStyle";
import styled from "styled-components";
import useCustomMutation from "../../hooks/useCustomMutation";

function TodoTask({ todo }) {
  const {
    setModalVisible,
    setTodo,
  } = useContext(TodoContext);

  
  const [editId, setEditId] = useState(0);
  const [editTitle, setEditTitle] = useState('');
  const [editContent, setEditContent] = useState('');

  const mutate = useCustomMutation();

  const [isChecked, setIsChecked] = useState(todo.checked);

  const todoCheck = async () => {
    mutate({
      method: 'PATCH',
      url: `${import.meta.env.VITE_TODO}/${todo.id}`,
      data: {
        checked: !isChecked,
      },
    })
  }

  const deleteTodo = async (id) => {
    mutate({
      method: 'DELETE',
      url: `${import.meta.env.VITE_TODO}/${id}`
    })
  };

  const clickUpdate = (todo) => {
    setEditId(todo.id)
    setEditTitle(todo.title)
    setEditContent(todo.content)
  };

  const updateTodo = async (todo, text) => {
    if (text.trim()) {                  // 빈 칸 수정 방지
      mutate({
        method: 'PATCH',
        url: `${import.meta.env.VITE_TODO}/${todo.id}`,
        data: {
          "title": editTitle,
          "content": editContent,
        },
      })
      todo.title = editTitle            // 낙관적 업데이트
      todo.content = editContent
      setEditId(0);
    }
  };

  return (
    <S.TodoCard>
      <S.TodoBox>
        <S.CheckBox
          type="checkbox"
          checked={isChecked}
          onClick={() => todoCheck(todo.id)}
          onChange={(e) => setIsChecked(e.target.checked)}
        />
        
        <S.TodoContainer>
          {todo.id !== editId ? (
            <TextWrapper onClick={() => {
              {
                setModalVisible(true);
                setTodo(todo);
              }
            }}>
              <S.TodoTask $fontWeight={"bold"} $borderBottom={'1px solid rgba(136, 161, 122, 0.5);'}>{todo.title}</S.TodoTask>
              <S.TodoTask>{todo.content}</S.TodoTask>
            </TextWrapper>
          ) : (
            <>
              <S.TodoTaskInput
                $fontWeight={"bold"}
                defaultValue={todo.title}
                onChange={(e) => setEditTitle(e.target.value)}
              />
              <S.TodoTaskInput
                defaultValue={todo.content}
                onChange={(e) => setEditContent(e.target.value)}
              />
            </>
          )}

          <S.TodoButtonWrapper>
            <S.TodoButton className='delete-button button' onClick={() => deleteTodo(todo.id)}>삭제</S.TodoButton>
            {todo.id === editId ? (
              <S.TodoButton className='update-button button' onClick={() => updateTodo(todo, editTitle)}>완료</S.TodoButton>
              ) : (
              <S.TodoButton className='update-button button' onClick={() => clickUpdate(todo)}>수정</S.TodoButton>
            )}
          </S.TodoButtonWrapper>
        </S.TodoContainer>
      </S.TodoBox>
    </S.TodoCard>
  );
}

export default TodoTask;

const TextWrapper = styled.div`
  cursor: pointer;
`