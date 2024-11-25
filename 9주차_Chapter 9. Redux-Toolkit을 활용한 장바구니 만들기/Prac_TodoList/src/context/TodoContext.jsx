import { createContext, useState } from "react";

export const TodoContext = createContext();

export function TodoContextProvider({ children }) {
  
  const [modalVisible, setModalVisible] = useState(false);
  const [todo, setTodo] = useState();

  return (
    <TodoContext.Provider value={{
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
