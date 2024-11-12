import { createContext, useState } from "react";

export const PageContext = createContext();

export function PageContextProvider({ children }) {
  const [title, setTitle] = useState('왓챠');
  
  return (
    <PageContext.Provider
      value={{
        title,
        setTitle,
      }}
    >
      {children}
    </PageContext.Provider>
  );
}
