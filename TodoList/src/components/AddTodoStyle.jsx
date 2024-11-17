import { styled } from 'styled-components'

export const AddTodoForm = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 10px 50px 30px 50px;
    padding: 0px 10px 0px 10px;

    border: 0px;
    border-radius: 15px;
    box-shadow: 0px 5px 10px rgb(0, 0, 0, 0.15);

    box-sizing: border-box;
`

export const InputWrapper = styled.div`
    width: 90%;

    display: flex;
    flex-direction: column;
`

export const AddTodoInput = styled.input`
    margin: 10px 5px 10px 5px;
    width: 100%;
    height: 30px;

    font-size: 15px;
    color: rgb(136, 161, 122);

    border: 0px;

    outline: 0;

    box-sizing: border-box;
    &::placeholder{
        color: rgba(136, 161, 122, 0.5);
    }
`

export const AddTodoButton = styled.button`
    margin: 10px 5px 10px 5px;
    width: 5%;
    min-width: 30px;

    font-size: 25px;

    background-color: white;
    border: 0px;
    color: rgb(136, 161, 122);

    box-sizing: border-box;
    &:hover{
        cursor: pointer;
    }
`