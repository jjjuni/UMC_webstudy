import { useRouter } from "next/router"
import { useState } from "react";
import { handleDragStart, handleDragStop, handleClick } from './dragUtil';

export const useDrag = () => {
  const router = useRouter(); 
  const [dragStartTime, setDragStartTime] = useState(null);
  const [isLongPress, setIsLongPress] = useState(false);

  return {
    handleDragStart: () => {
      handleDragStart(setDragStartTime, setIsLongPress)
    },
    handleDragStop: () => {
      handleDragStop(dragStartTime, setIsLongPress)
    },
    handleClick: (e, link) => {
      handleClick(isLongPress, link, router)
    },
    isLongPress, 
  }
}