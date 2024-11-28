import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { addItem, removeItem } from "../redux/cartSlice";
import { GoPlus } from "react-icons/go";
import { FiMinus } from "react-icons/fi";
import { BsCartPlus } from "react-icons/bs";

const Album = ({item, cart}) => {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <AlbumBox>
      <AlbumCoverWrapper>
        <AlbumCover src={item.img}/>
      </AlbumCoverWrapper>
      <TextWrapper>
        <Title>{item.title}</Title>
        <Price>\ {item.price}</Price>
      </TextWrapper>
      <ButtomBox>
        <ButtonWrapper>
          {cart ? (
            <>
              <Button onClick={() => dispatch(addItem(item))}><GoPlus/></Button>
              <Count>{cartItems?.count[item.id] || 0}</Count>
              <Button onClick={() => dispatch(removeItem(item.id))}><FiMinus/></Button>
            </>
          ) : (
            <AddCart onClick={() => dispatch(addItem(item))}>
              <BsCartPlus size={'25px'}/>
            </AddCart>
          )
          }
          
        </ButtonWrapper>
      </ButtomBox>
    </AlbumBox>
  )
}

export default Album;

const AlbumBox = styled.div`
  display: flex;
  width: 80%;
  height: 100px;

  border-bottom: 1px solid rgb(34 34 34);

  overflow: hidden;

  padding: 15px;
`

const AlbumCoverWrapper = styled.div`
  aspect-ratio: 1/1;
`
const AlbumCover = styled.img`
  height: 100%;
  aspect-ratio: 1/1;
  user-select: none;
`

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 60%;
  padding: 0 0 0 20px;

  justify-content: center;

  overflow: hidden;
`

const Title = styled.p`
  margin: 3px;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

const Price = styled.p`
  font-family: GmarketSansMedium;
  font-size: 12px;
  margin: 3px;
  color: #a1a1a1;
`

const ButtomBox = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  flex-grow: 1;
`

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 70%;
  max-width: 200px;
`

const Button = styled.button`
  font-size: 20px;
  color: white;
  
  background-color: #0e0f10;
  border: 0;
  margin: 5px 6px 0;
  padding: 0;

  cursor: pointer;
`
const Count = styled.p`
  text-align: center;
  width: 50%;
  font-size: 17px;
  margin: 0;
  color: #a1a1a1;
`

const AddCart = styled.div`
  cursor: pointer;
`