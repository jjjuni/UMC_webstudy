import styled from "styled-components";
import Album from "./Album";
import cartItems from "../constants/cartItems";

const PlayList = () => {

  const AlbumList = cartItems;

  return(
    <ListWrapper>
      {AlbumList.map((item) => (
        <Album key={item.id} item={item}/>
      ))}
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