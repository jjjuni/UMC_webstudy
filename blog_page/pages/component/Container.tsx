import { ReactNode } from "react"

interface ReactProps {
  children?: ReactNode;
}

export const Container: React.FC<ReactProps> = ({ children }) => {
  return (
    <div className={`text-[25px] font-bold w-[100%] flex flex-col p-[150px] pt-[100px] min-h-[calc(100vh-100px-150px)] items-center justify-items-center text-center`}>
      {children}
    </div>
  )
}