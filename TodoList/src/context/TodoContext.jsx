import { createContext, useState } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import useCustomMutation from "../hooks/useCustomMutation";

export const TodoContext = createContext();

export function TodoContextProvider({ children }) {

  const mutate = useCustomMutation();

  const { data, isPending } = useQuery({
    queryKey: ['getTodos'],
    queryFn: async () => {
      const response = await axios.get(import.meta.env.VITE_TODO);
      return response.data[0]
    }
  })

  const [inputTitle, setInputTitle] = useState('');
  const [inputContent, setInputContent] = useState('');
  const [editId, setEditId] = useState(0);
  const [editTitle, setEditTitle] = useState('');
  const [editContent, setEditContent] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [todo, setTodo] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  // todo 추가
  const addTodo = async () => {
    if (inputTitle.trim()) {                   // 빈 칸 등록 방지
      setInputTitle('');
      setInputContent('');
      mutate({
        method: 'POST',
        url: import.meta.env.VITE_TODO,
        data : {
          title: inputTitle,
          content: inputContent,
          checked: false,
        },
      })
    }
  };

  // todo 삭제
  const deleteTodo = async (id) => {
    mutate({
      method: 'DELETE',
      url: `${import.meta.env.VITE_TODO}/${id}`
    })
  };

  // 수정 버튼을 눌렀을 때 (편집 id, 편집 text 설정)
  const clickUpdate = (todo) => {
    setEditId(todo.id)
    setEditTitle(todo.title)
    setEditContent(todo.content)
  };

  // todo 수정
  const updateTodo = async (todo, text) => {
    if (text.trim()) {                  // 빈 칸 수정 방지
      mutate({
        method: 'PATCH',
        url: `${import.meta.env.VITE_TODO}/${todo.id}`,
        data: {
          "title": editTitle,
          "content": editContent,
        },
      })
      todo.title = editTitle            // 낙관적 업데이트
      todo.content = editContent
      setEditId(0);
    }
  };

  return (
    <TodoContext.Provider value={{
      todos: data,
      isPending,
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
      modalVisible,
      setModalVisible,
      todo,
      setTodo,
    }}
    >
      {children}
    </TodoContext.Provider>
  )
}
