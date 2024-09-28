import PropTypes from "prop-types";

function TodoTask({todo, setEditText}) {

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
  setEditText: PropTypes.func.isRequired,
};

export default TodoTask;