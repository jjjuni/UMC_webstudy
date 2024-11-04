import { createContext, useState } from "react";

export const TodoContext = createContext();

export function TodoContextProvider({ children }) {
  const [todos, setTodos] = useState([]);
  const [inputText, setInputText] = useState('');
  const [editText, setEditText] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  // todo 추가
  const addTodo = () => {         
    if (inputText.trim()){                   // 빈 칸 등록 방지
      setTodos((prev) => [
        ...prev, 
        {id: Math.floor(Math.random() * 100) + 2, task: inputText, edit: false}
      ]);
      setInputText('');
    }
  };
  
  // todo 삭제
  const deleteTodo = (id) => {      
    setTodos((prev) => prev.filter((item) => item.id !== id));
  };

  // 수정 버튼을 눌렀을 때 (편집 id, 편집 text 설정)
  const clickUpdate = (todo) => {
    setTodos((prev) => 
      prev.map((item) => (item.id === todo.id ? {...item, edit: true} : item))
    );
    setEditText(todo.task)
  };

  // todo 수정
  const updateTodo = (id, text) => {
    if (text.trim()){                   // 빈 칸 수정 방지
      setTodos((prev) => 
        prev.map((item) => (item.id === id ? {...item, task: text, edit: false} : item))
      );
    }
  };

  return (
    <TodoContext.Provider value={{
      todos, 
      setTodos,
      inputText,
      setInputText,
      editText,
      setEditText,
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
