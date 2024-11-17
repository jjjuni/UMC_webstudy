import PropTypes from 'prop-types';
import { useContext } from 'react';
import { TodoContext } from '../../context/TodoContext';
import * as S from '../TodoListStyle';

function UpdateButton({todo}) {
  const {
    editTitle,
    updateTodo,
    clickUpdate,
  } = useContext(TodoContext)

  return (
    <>
      {todo.edit ? (
        <S.TodoButton className='update-button button' onClick={() => updateTodo(todo.id, editTitle)}>완료</S.TodoButton>
        ) : (
        <S.TodoButton className='update-button button' onClick={() => clickUpdate(todo)}>수정</S.TodoButton>
      )}
    </>
  );
}

  
export default UpdateButton;