import * as S from './TodoListStyle.jsx'
import DeleteButton from './TodoList/DeleteButton.jsx'
import UpdateButton from './TodoList/UpdateButton.jsx'
import TodoTask from './TodoList/TodoTask.jsx';
import { useContext } from 'react';
import { TodoContext } from '../context/TodoContext.jsx';

function TodoList() {
  const {
    todos,
  } = useContext(TodoContext)
  return (
    <>
      {todos.map((todo) => (
        <S.TodoBox key={todo.id}>

          <TodoTask todo={todo}/>

          <S.TodoButtonWrapper>
            <DeleteButton todo={todo}/>
            <UpdateButton todo={todo}/>
          </S.TodoButtonWrapper>
        </S.TodoBox>
      ))}
    </>
  );
}

export default TodoList;