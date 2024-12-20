import { ReactNode } from "react"

interface ReactProps {
  children?: ReactNode;
}

export const Container: React.FC<ReactProps> = ({ children }) => {
  return (
    <div className={`flex flex-col p-[150px] pt-[100px] min-h-[calc(100vh-100px-150px)] items-center`}>
      <div className={`text-[25px] font-bold m-[20px] text-center w-[100%] justify-items-center`}>
        {children}
      </div>
    </div>
  )
}