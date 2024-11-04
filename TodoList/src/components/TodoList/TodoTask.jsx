import PropTypes from "prop-types";
import { useContext } from 'react';
import { TodoContext } from '../../context/TodoContext';

function TodoTask({todo}) {
  const {
    setEditText,
  } = useContext(TodoContext)

  return (
    <>
      {!todo.edit && <p className="todo-task">{todo.task}</p>}

      {todo.edit && (
        <input
          className="todo-task-input"
          defaultValue={todo.task}
          onChange={(e) => setEditText(e.target.value)}
        />
      )}
    </>
  );
}

TodoTask.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    task: PropTypes.string.isRequired,
    edit: PropTypes.bool.isRequired,
  }).isRequired,
};

export default TodoTask;