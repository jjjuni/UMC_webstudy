import * as S from './TodoListStyle.jsx'
import TodoTask from './TodoList/TodoTask.jsx';
import { useContext, useState } from 'react';
import { TodoContext } from '../context/TodoContext.jsx';
import axios from 'axios';

function TodoList() {
  const {
    todos,
  } = useContext(TodoContext)

  return (
    <>
      {todos?.map((todo) => (
        <S.TodoCard key={todo.id}>
          <S.TodoContainer>
            <TodoTask todo={todo}/>
          </S.TodoContainer>
        </S.TodoCard>
      ))}
    </>
  );
}

export default TodoList;