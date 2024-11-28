import PlayList from "../component/PlayList";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../redux/cartSlice";
import * as S from './style';
import { openModal } from "../redux/modalSlice";
import ModalPortal from '../component/ModalPortal';
import AlertModal from "../component/AlertModal";
import { useEffect } from "react";
import { useLocation } from 'react-router-dom'

const CartPage = () => {

  const cartItems = useSelector((state) => state.cart);
  const modal = useSelector((state) => state.modal)
  const dispatch = useDispatch();

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // 라우팅 변경 시 스크롤을 맨 위로 이동
  }, [location]);

  return (
    <S.PageContainer>
      <S.Title>나만의 PlayList</S.Title>
      <S.ListTop>
        <S.DeleteButton onClick={() => dispatch(openModal())} disabled={cartItems.cart.length > 0 ? false : true}>전체 삭제</S.DeleteButton>
        {modal.isOpen && 
          <ModalPortal>
            <AlertModal>
            </AlertModal>
          </ModalPortal>
        }
      </S.ListTop>
      <PlayList cart={true} AlbumList={cartItems.cart}/>
      <S.TotalInfoBox>
        <S.TotalPriceWrapper>
          <S.TotalPrice>총 가격</S.TotalPrice>
          <S.TotalPrice>
            {
              cartItems.cart.reduce((acc, curr) => {
                return acc + (curr.price * cartItems.count[curr.id]);
              }, 0)
            } 원
          </S.TotalPrice>
        </S.TotalPriceWrapper>
      </S.TotalInfoBox>
    </S.PageContainer>
  )
};

export default CartPage;