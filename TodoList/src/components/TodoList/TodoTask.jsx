import PropTypes from "prop-types";
import { useState, useContext } from "react";
import { TodoContext } from "../../context/TodoContext";
import * as S from "../TodoListStyle";
import DeleteButton from "./DeleteButton";
import UpdateButton from "./UpdateButton";
import axios from "axios";

function TodoTask({ todo }) {
  const { 
    setEditTitle, 
    setEditContent,
    editId,
  } = useContext(TodoContext);

  const [isChecked, setIsChecked] = useState(todo.checked);

  const todoCheck = async (id, checked) => {
    const response = await axios.patch(`${import.meta.env.VITE_TODO}/${id}`,{
      "checked": !isChecked,
    })
    console.log(response)
  }

  return (
    <>
    <S.TodoBox>
      <S.CheckBox
        type="checkbox"
        checked={isChecked}
        onClick={() => todoCheck(todo.id, todo.checked)}
        onChange={(e) => setIsChecked(e.target.checked)}
      />
      
      <S.TodoContainer>
      {todo.id !== editId ? (
        <>
          <S.TodoTask $fontWeight={"bold"} $borderBottom={'1px solid rgba(136, 161, 122, 0.5);'}>{todo.title}</S.TodoTask>
          <S.TodoTask>{todo.content}</S.TodoTask>
        </>
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
