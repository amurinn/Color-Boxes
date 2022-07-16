import styled from 'styled-components'

const Item = (props) => {
    return (
        <Wrapper style={{backgroundColor: props.color}}>
            <span>{props.number}</span>
        </Wrapper>
    )
}

export default Item

const Wrapper = styled.div`
    width: 100px;
    aspect-ratio: 1;
    border: 1px solid black;
    display: flex;
    align-items: center;
    justify-content: center;

    span{
        font-size: 30px;
        font-weight: 600;
    }

    @media(max-width: 860px){
        width: 50px;
    }
`