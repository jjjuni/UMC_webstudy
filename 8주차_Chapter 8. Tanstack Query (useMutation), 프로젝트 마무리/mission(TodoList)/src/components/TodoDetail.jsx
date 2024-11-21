import { useContext } from "react";
import styled from "styled-components";
import { TodoContext } from "../context/TodoContext";


const TodoDetail = ({ todo }) => {
  const {
    modalVisible,
    setModalVisible,
  } = useContext(TodoContext);

  return (
    <>
      <ModalOverlay onClick={() => setModalVisible(false)} $isVisible={modalVisible}>
        <TodoModalContainer $isVisible={modalVisible} onClick={(e) => e.stopPropagation()}>
          <TodoWrapper>
            <TodoTitle>{todo?.title}</TodoTitle>
            <TodoContent>{todo?.content}</TodoContent>
            <TodoDate>{todo?.updatedAt}</TodoDate>
          </TodoWrapper>
        </TodoModalContainer>
      </ModalOverlay>
    </>
  )
}

export default TodoDetail;

const ModalOverlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${({$isVisible}) => ($isVisible ? 'rgba(0, 0, 0, 0.3)' : 'rgba(0, 0, 0, 0)')};
  visibility: ${({$isVisible}) => ($isVisible ? "visible" : "hidden")};
  transition: background-color 0.4s ease, visibility 0.4s ease;
`

const TodoModalContainer = styled.div`
  font-family: Pretendard-Regular;
  width: 50%;
  height: 50%;
  border: 0;
  border-radius: 10px;

  display: flex;
  justify-content: center;
  
  background-color: white;
  opacity: ${({$isVisible}) => ($isVisible ? 1 : 0)};
  visibility: ${({$isVisible}) => ($isVisible ? "visible" : "hidden")};
  transition: all 0.4s ease;

  overflow: hidden;
`

const TodoWrapper = styled.div`
  width: 85%;
  display: flex;
  flex-direction: column;
`

const TodoTitle = styled.h1`
  width: 100%;
  color: rgb(136, 161, 122);
  border-bottom: 1px solid rgba(136, 161, 122, 0.5);
  font-size: 30px;

  padding: 0 0 10px 0;
`

const TodoContent = styled.p`
  color: rgb(136, 161, 122);
  font-size: 15px;
  flex-grow: 1;
`

const TodoDate = styled.p`
  color: rgb(136, 161, 122);
  font-size: 13px;
  margin: 0 0 7px 0;
`

