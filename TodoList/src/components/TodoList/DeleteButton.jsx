import PropTypes from 'prop-types';
import { useContext } from 'react';
import { TodoContext } from '../../context/TodoContext';

function DeleteButton({todo}) {
  const {
    deleteTodo,
  } = useContext(TodoContext)


  return (
    <button className='delete-button button' onClick={() => deleteTodo(todo.id)}>삭제</button>
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