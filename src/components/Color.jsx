import styled from 'styled-components';

const Color = (props) => {
    return (
        <ColorBox style={{backgroundColor: props.selectedColor}}>
            <span>{props.selectedColor}</span>
        </ColorBox>
    )
}

export default Color


const ColorBox = styled.div`
    width: 70px;
    aspect-ratio: 1;
    border: 1px solid black;
    display: flex;
    align-items: center;
    justify-content: center;
    span{
        font-size: 10px;
    }
    @media(max-width: 860px){
        width: 40px;
    }
`