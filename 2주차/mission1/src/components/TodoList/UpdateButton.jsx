import PropTypes from 'prop-types';

function UpdateButton({todo, setTodos, editText, setEditText}) {

  // todo 수정
  const updateTodo = (id, text) => {
    if (text.trim()){                   // 빈 칸 수정 방지
      setTodos((prev) => 
        prev.map((item) => (item.id === id ? {...item, task: text, edit: false} : item))
      );
    }
  };

  // 수정 버튼을 눌렀을 때 (편집 id, 편집 text 설정)
  const clickUpdate = (todo) => {
    setTodos((prev) => 
      prev.map((item) => (item.id === todo.id ? {...item, edit: true} : item))
    );
    setEditText(todo.task)
  };

  return (
    <>
      {todo.edit ? (
        <button className='update-button button' onClick={() => updateTodo(todo.id, editText)}>완료</button>
        ) : (
        <button className='update-button button' onClick={() => clickUpdate(todo)}>수정</button>
      )}
    </>
  );
}

UpdateButton.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    task: PropTypes.string.isRequired,
    edit: PropTypes.bool.isRequired,
  }).isRequired,

  setTodos: PropTypes.func.isRequired,
  editText: PropTypes.string.isRequired,
  setEditText: PropTypes.func.isRequired,
};
  
export default UpdateButton;