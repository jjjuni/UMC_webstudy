import { styled } from 'styled-components'

export const TodoCard = styled.div`
    font-family: Pretendard-Regular;
    display: flex;

    margin: 10px 50px 10px 50px;
    padding: 5px 10px 5px 10px;

    align-items: center;

    border: 0;
    border-radius: 10px;

    box-shadow: 0px 5px 10px rgb(0, 0, 0, 0.15);

    box-sizing: border-box;
`

export const TodoContainer = styled.div`
    width: 100%;
`

export const TodoBox = styled.div`
    display: flex;
    align-items: center;
`

export const CheckBox = styled.input`
    appearance: none;
    height: 20px;
    width: 20px;

    margin: 5px 12px 5px 5px;

    border: 1px solid rgba(136, 161, 122, 0.5);
    border-radius: 2px;

    &:checked{
        border: 1px solid rgb(112, 134, 100);
        appearance: auto;
    }

    accent-color: rgb(112, 134, 100);
`

export const TodoTask = styled.p`   
    font-weight: ${props => props.$fontWeight || ';'};
    border-bottom: ${props => props.$borderBottom || ';'}
    margin: 5px;
    padding: 0px 5px 0px 5px;
    width: 100%;
    height: 30px;
    align-content: center;

    color: rgb(136, 161, 122);

    box-sizing: border-box;
`

export const TodoTaskInput = styled.input`
    font-weight: ${props => props.$fontWeight || ';'};
    padding: 8px 10px;
    margin: 2px;
    width: 100%;
    height: 35px;
    align-content: center;

    font-size: 16px;

    outline: 0;
    border: 1px solid rgba(136, 161, 122, 0.5);
    border-radius: 10px;

    color: rgb(136, 161, 122);

    box-sizing: border-box;
`

export const TodoButtonWrapper = styled.div`
    display: flex;
    justify-content: end;

    margin: 10px 0 0 10px;
    padding: 5px 0 0;
`

export const TodoButton = styled.button`
    font-family: Pretendard-Regular;
    background-color: white;
    color: rgb(136, 161, 122);
    height: 30px;
    border: 1px solid rgb(136, 161, 122);
    border-radius: 10px;
    margin: 5px;

    &:hover{
        cursor: pointer;
    }
`