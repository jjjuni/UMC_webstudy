import PropTypes from 'prop-types';

function DeleteButton({todo, setTodos}) {

  // todo 삭제
  const deleteTodo = (id) => {      
    setTodos((prev) => prev.filter((item) => item.id !== id));
  };


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
  setTodos: PropTypes.func.isRequired,
};

export default DeleteButton