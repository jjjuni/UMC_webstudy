import { useState, useContext } from "react";
import { TodoContext } from "../../context/TodoContext";
import * as S from "../TodoListStyle";
import DeleteButton from "./DeleteButton";
import UpdateButton from "./UpdateButton";
import axios from "axios";
import styled from "styled-components";
import useCustomMutation from "../../hooks/useCustomMutation";

function TodoTask({ todo }) {
  const { 
    setEditTitle, 
    setEditContent,
    editId,
    setModalVisible,
    setTodo,
  } = useContext(TodoContext);

  const mutate = useCustomMutation();

  const [isChecked, setIsChecked] = useState(todo.checked);

  const todoCheck = async (id) => {
    mutate({
      method: 'PATCH',
      url: `${import.meta.env.VITE_TODO}/${todo.id}`,
      data: {
        checked: !isChecked,
      },
    })
  }

  return (
    <>
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
        <DeleteButton todo={todo} />
        <UpdateButton todo={todo} />
      </S.TodoButtonWrapper>
      </S.TodoContainer>
      </S.TodoBox>
    </>
  );
}

export default TodoTask;

const TextWrapper = styled.div`
  cursor: pointer;
`