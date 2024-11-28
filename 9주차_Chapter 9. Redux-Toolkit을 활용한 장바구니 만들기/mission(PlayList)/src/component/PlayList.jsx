import styled from "styled-components";
import Album from "./Album";

const PlayList = ({cart, AlbumList}) => {

  return(
    <ListWrapper>
      {AlbumList.length > 0 ? (
        AlbumList.map((item) => (
          <Album key={item.id} item={item} cart={cart}/>
        ))
      ) : (
        <AlbumBox>
          <NoneAlbum>리스트가 비어있습니다</NoneAlbum>
        </AlbumBox>
      )}
    </ListWrapper>
  )
}

export default PlayList;

const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
`

const NoneAlbum = styled.div`
  width: 100%;
  text-align: center;
  align-content: center;
  color: #464646;
`

const AlbumBox = styled.div`
  display: flex;
  width: 80%;
  height: 100px;

  border-bottom: 1px solid rgb(34 34 34);

  overflow: hidden;

  padding: 15px;
`