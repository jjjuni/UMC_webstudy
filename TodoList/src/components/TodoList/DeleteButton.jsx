import PropTypes from 'prop-types';
import { useContext } from 'react';
import { TodoContext } from '../../context/TodoContext';
import * as S from '../TodoListStyle';

function DeleteButton({todo}) {
  const {
    deleteTodo,
  } = useContext(TodoContext)


  return (
    <S.TodoButton className='delete-button button' onClick={() => deleteTodo(todo.id)}>삭제</S.TodoButton>
  );
}

DeleteButton.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    task: PropTypes.string.isRequired,
    edit: PropTypes.bool.isRequired,
  }).isRequired,
};

export default DeleteButton