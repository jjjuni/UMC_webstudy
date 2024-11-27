import styled, { keyframes } from "styled-components";
import { useDispatch, useSelector } from 'react-redux'
import { closeModal } from "../redux/modalSlice";
import { clearCart } from "../redux/cartSlice";

const AlertModal = ({children}) => {
    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());
        dispatch(closeModal());
    }

    return (
        <ModalBack onClick={() => dispatch(closeModal())}>
            <Modal onClick={(e) => e.stopPropagation()}>
                <ModalContent>
                    모든 앨범을 삭제하시겠습니까?
                </ModalContent>
                <ButtonWrapper>
                    <ModalButton onClick={() => handleClearCart()}>네</ModalButton>
                    <ModalButton $color={'#e55e4a'} onClick={() => dispatch(closeModal())}>아니요</ModalButton>
                </ButtonWrapper>
            </Modal>
        </ModalBack>
    )
}

export default AlertModal;

const ModalAnimation = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`

const ModalBack = styled.div`
    position: fixed;
    background-color: rgba(0, 0, 0, 0.5);
    
    top: 0;
    width: 100vw;
    height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;
    animation: ${ModalAnimation} 0.2s 0s linear;'
`

const Modal = styled.div`
    width: 450px;
    height: 200px;

    background-color: #0e0f10;

    display: flex;
    flex-direction: column;
    justify-content: space-around;

    border: 1px solid rgb(34 34 34);
    border-radius: 5px;

    z-index: 5;
`

const ModalContent = styled.p`
    text-align: center;
`

const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
`

const ModalButton = styled.button`
    font-family: Pretendard-Regular;
    color: ${props => props.$color || 'white'};
    background: none;
    border: 0;
    cursor: pointer;

    margin: 0 30px;
`