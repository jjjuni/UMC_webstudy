import { styled } from 'styled-components'

export const TodoBox = styled.div`
    display: flex;
    flex-direction: column;

    margin: 10px 50px 10px 50px;
    padding: 5px 10px 5px 10px;

    border: 0;
    border-radius: 10px;

    box-shadow: 0px 5px 10px rgb(0, 0, 0, 0.15);

    box-sizing: border-box;
`

export const TodoTask = styled.p`   
    margin: 5px;
    padding: 0px 5px 0px 5px;
    height: 30px;
    align-content: center;

    color: rgb(136, 161, 122);
`

export const TodoTaskInput = styled.input`
    padding: 3px 10px 3px 10px;
    margin: 2px;
    height: 30px;
    align-content: center;

    font-size: 16px;

    outline: 0;
    border: 1px solid rgba(136, 161, 122, 0.5);
    border-radius: 10px;

    color: rgb(136, 161, 122);
`

export const TodoButtonWrapper = styled.div`
    display: flex;
    justify-content: end;
`

export const TodoButton = styled.button`
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