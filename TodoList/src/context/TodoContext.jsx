import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const TodoContext = createContext();

export function TodoContextProvider({ children }) {
  const [todos, setTodos] = useState([]);
  const [inputTitle, setInputTitle] = useState('');
  const [inputContent, setInputContent] = useState('');
  const [editTitle, setEditTitle] = useState('');
  const [editContent, setEditContent] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(import.meta.env.VITE_TODO);
      setTodos(response.data[0])
    }
    fetchData();
  }, [])

  // todo 추가
  const addTodo = async () => {         
    if (inputTitle.trim()){                   // 빈 칸 등록 방지
      setTodos((prev) => [
        ...prev, 
        {id: Math.floor(Math.random() * 100) + 2, title: inputTitle, content: inputContent, edit: false}
      ]);
      setInputTitle('');
      setInputContent('');
      await axios.post(import.meta.env.VITE_TODO, {
        "title" : inputTitle,
        "content" : inputContent,
      })
    }
  };
  
  // todo 삭제
  const deleteTodo = async (id) => { 
    setTodos((prev) => prev.filter((item) => item.id !== id));
    await axios.delete(`${import.meta.env.VITE_TODO}/${id}`)
  };

  // 수정 버튼을 눌렀을 때 (편집 id, 편집 text 설정)
  const clickUpdate = (todo) => {
    setTodos((prev) => 
      prev.map((item) => (item.id === todo.id ? {...item, edit: true} : {...item, edit: false}))
    );
    setEditTitle(todo.title)
    setEditContent(todo.content)
  };

  // todo 수정
  const updateTodo = async (id, text) => {
    if (text.trim()){                   // 빈 칸 수정 방지
      setTodos((prev) => 
        prev.map((item) => (item.id === id ? {...item, title: editTitle, content: editContent, edit: false} : item))
      );
      await axios.patch(`${import.meta.env.VITE_TODO}/${id}`, {
        "title": editTitle,
        "content": editContent,
      })
    }
  };

  return (
    <TodoContext.Provider value={{
      todos,
      setTodos,
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
    }}
    >
      {children}
    </TodoContext.Provider>
  )
}
