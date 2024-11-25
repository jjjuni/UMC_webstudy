import * as S from './TodoListStyle.jsx'
import TodoCard from './TodoList/TodoCard.jsx';
import axios from 'axios';
import styled from 'styled-components';
import { BeatLoader } from "react-spinners";
import { useQuery } from '@tanstack/react-query';

function TodoList() {

  const { data: todos, isPending } = useQuery({
    queryKey: ['getTodos'],
    queryFn: async () => {
      const response = await axios.get(import.meta.env.VITE_TODO);
      return response.data[0]
    }
  })

  return (
    <>
      {isPending ? (
        <Loading>
          <BeatLoader
            color="rgb(136, 161, 122)"
            cssOverride={{}}
            loading
            size={15}
            speedMultiplier={0.7}
          />
        </Loading>
      ) : (
        todos?.map((todo) => (
          <TodoCard key={todo.id} todo={todo}/>
        ))
      )}
    </>
  );
}

export default TodoList;

const Loading = styled.div`
  display: flex;
  justify-content: center;
  margin: 25vh 0 0;
`