import PlayList from '../component/PlayList';
import * as S from './style'
import cartItems from "../constants/cartItems";
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const PlayListPage = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // 라우팅 변경 시 스크롤을 맨 위로 이동
  }, [location]);

  return (
    <S.PageContainer>
      <S.Title>요즘 노래 뭐 듣지?</S.Title>
      <S.ListTop>
      </S.ListTop>
      <PlayList cart={false} AlbumList={cartItems}/>
      <S.TotalInfoBox>
      </S.TotalInfoBox>
    </S.PageContainer>
  );
};

export default PlayListPage;