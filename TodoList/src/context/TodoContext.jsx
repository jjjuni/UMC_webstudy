import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { useQuery, useQueryClient } from "@tanstack/react-query";

export const TodoContext = createContext();

export function TodoContextProvider({ children }) {
  const queryClient = useQueryClient();

  const { data } = useQuery ({
    queryKey: ['getTodos'],
    queryFn: async () => 
      {
        const response = await axios.get(import.meta.env.VITE_TODO);
        return response.data[0]
      }
  })
  
  const [editId, setEditId] = useState(0);
  const [inputTitle, setInputTitle] = useState('');
  const [inputContent, setInputContent] = useState('');
  const [editTitle, setEditTitle] = useState('');
  const [editContent, setEditContent] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  // todo 추가
  const addTodo = async () => {         
    if (inputTitle.trim()){                   // 빈 칸 등록 방지
      setInputTitle('');
      setInputContent('');
      await axios.post(import.meta.env.VITE_TODO, {
        "title" : inputTitle,
        "content" : inputContent,
      });
      queryClient.invalidateQueries(['getTodos'])
    }
  };
  
  // todo 삭제
  const deleteTodo = async (id) => {
    await axios.delete(`${import.meta.env.VITE_TODO}/${id}`)
    queryClient.invalidateQueries(['getTodos'])
  };

  // 수정 버튼을 눌렀을 때 (편집 id, 편집 text 설정)
  const clickUpdate = (todo) => {
    setEditId(todo.id)
    console.log(todo.id)
    setEditTitle(todo.title)
    setEditContent(todo.content)
  };

  // todo 수정
  const updateTodo = async (id, text) => {
    if (text.trim()){                   // 빈 칸 수정 방지
      await axios.patch(`${import.meta.env.VITE_TODO}/${id}`, {
        "title": editTitle,
        "content": editContent,
      })
      setEditId(0);
      queryClient.invalidateQueries(['getTodos'])
    }
  };

  return (
    <TodoContext.Provider value={{
      todos: data,
      inputTitle,
      setInputTitle,
      inputContent,
      setInputContent,
      editTitle,
      setEditTitle,
      editContent, 
      setEditContent,
      handleSubmit,
      addTodo,
      deleteTodo,
      updateTodo,
      clickUpdate,
      editId,
    }}
    >
      {children}
    </TodoContext.Provider>
  )
}
