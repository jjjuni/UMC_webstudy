import PropTypes from "prop-types";
import { useContext } from 'react';
import { TodoContext } from '../../context/TodoContext';
import * as S from '../TodoListStyle'

function TodoTask({todo}) {
  const {
    setEditText,
  } = useContext(TodoContext)

  return (
    <>
      {!todo.edit && 
        <>
          <S.TodoTask>{todo.title}</S.TodoTask>
          <S.TodoTask>{todo.task}</S.TodoTask>
        </>
      }

      {todo.edit && (
        <>
          <S.TodoTaskInput
            defaultValue={todo.title}
            onChange={(e) => setEditText(e.target.value)}
          />
          <S.TodoTaskInput
            defaultValue={todo.task}
            onChange={(e) => setEditText(e.target.value)}
          />
        </>
      )}
    </>
  );
}

TodoTask.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    task: PropTypes.string.isRequired,
    edit: PropTypes.bool.isRequired,
  }).isRequired,
};

export default TodoTask;