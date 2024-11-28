import styled from "styled-components";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import ListCard from "./list-card";
import { useEffect, useRef, useState } from "react";
import { useDebounceFn } from "../../hooks/useDebounce";

const MovieList = ({ moviesData }) => {
  const [listX, setListX] = useState(0);
  const [isDisabled, setIsDisabled] = useState(false);
  const [wrapperWidth, setWrapperWidth] = useState(0);
  const [containerWidth, setcontainerWidth] = useState(0);

  const wrapperRef = useRef(null);
  const containerRef = useRef(null);

  const update = () => {
    if (wrapperRef.current && containerRef.current){
      const wrapperSize = wrapperRef.current.getBoundingClientRect().width;
      const containerSize = containerRef.current.getBoundingClientRect().width
      setWrapperWidth(wrapperSize)
      setcontainerWidth(containerSize)
    }
  }

  const debouncedUpdate = useRef(useDebounceFn(update, 50)).current;

  useEffect(() => {
    debouncedUpdate();
    window.addEventListener("resize", debouncedUpdate)
    return () => {
      window.addEventListener("resize", debouncedUpdate)
    }
  }, [])

  const leftButtonHandler = () => {
    setListX((prev) => {
      setIsDisabled(true)
      const tmp = (prev > -containerWidth) ? 0 : (prev + (((200 * 5) / 3) * parseInt(containerWidth/((200 * 5) / 3))))

      let newListX
      
      if (prev == 0)
        newListX = containerWidth - wrapperWidth
        
      else 
        newListX = tmp

      setTimeout(() => setIsDisabled(false), 300)
      return newListX;
    });
  };

  const rightButtonHandler = () => {
    setListX((prev) => {
      setIsDisabled(true)
      const tmp = (prev <= containerWidth - wrapperWidth) ? 0 : (prev - (((200 * 5) / 3) * (containerWidth ? parseInt(containerWidth / ((200 * 5) / 3)) : 0)))

      let newListX
      
      if (-tmp <= wrapperWidth - containerWidth)
        newListX = tmp
        
      else if (-tmp > wrapperWidth - containerWidth)
        newListX = containerWidth - wrapperWidth

      setTimeout(() => setIsDisabled(false), 300)
      return newListX;
    });
  };

  return (
    <>
      <MovieListContainer ref={containerRef}>
        <ListButton $direction={'left'} $position={"left: 0"} onClick={leftButtonHandler} disabled={isDisabled}>
          <IoIosArrowBack size={"20px"} />
        </ListButton>
        <ListWrapper ref={wrapperRef} $X={listX}>
          {moviesData?.data?.results?.map((movie) => (
            <ListCard key={movie.id} movie={movie}></ListCard>
          ))}
        </ListWrapper>
        <ListButton $direction={'right'} $position={"right: 0"} onClick={rightButtonHandler} disabled={isDisabled}>
          <IoIosArrowForward size={"20px"} />
        </ListButton>
      </MovieListContainer>
    </>
  );
};

export default MovieList;

const MovieListContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  height: 250px;
  background-color: #060606;

  margin: 0 0 50px;

  overflow: hidden;
`;

const ListWrapper = styled.div`
  display: flex;

  height: 80%;

  position: relative;
  z-index: 5;

  left: ${(prop) => prop.$X}px;

  transition: all 0.5s ease;
`;

const ListButton = styled.button`
  position: absolute;
  ${(prop) => prop.$position};
  width: 40px;
  height: 100%;

  border: 0;
  
  color: #adadad;

  background-color: rgba(0, 0, 0, 0);

  cursor: pointer;

  z-index: 10;
  background: linear-gradient(to ${prop => prop.$direction}, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
  
  
  
  &:hover{
    color: white;
  }

  transition: all 0.2s ease;
`;
