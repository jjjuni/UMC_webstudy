
export const dragThreshold = 125; // 드래그로 간주할 시간(ms)
  
export const handleDragStart = (setDragStartTime, setIsLongPress) => {
  setDragStartTime(Date.now());
  setIsLongPress(false); // 초기화
};

export const handleDragStop = (dragStartTime, setIsLongPress) => {
  const dragDuration = Date.now() - dragStartTime;
  if (dragDuration > dragThreshold) {
    setIsLongPress(true); // 드래그가 일정 시간 이상일 경우만 드래그로 인식
  } else {
    setIsLongPress(false); // 드래그가 짧다면 클릭으로 간주
  }
};

export const handleClick = (isLongPress, link, router) => {
  if (!isLongPress && link) {
    router.push(link)
  }
};

