import styled from "styled-components"

const CustomButton = () => {
    return (
        <>
            <FirstStyledSweetPotato color={'purple'}>
                커스텀 버튼
            </FirstStyledSweetPotato>
            <FirstStyledSweetPotato color={'redd'}>
                커스텀 버튼
            </FirstStyledSweetPotato>
        </>
    )
}

export default CustomButton;

const FirstStyledSweetPotato = styled.button`
    background-color: ${prop => prop.color || 'purple'};
    border: none;
    padding: 0;
    cursor: pointer;
    &:hover {
        background-color: yellow;
        text-decoration: underline;
    }
`

