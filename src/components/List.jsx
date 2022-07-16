import styled from 'styled-components';
import Item from './Item'

const List = (props) => {

    const selectedColor = props.color
    const selectedNumber = props.number
    const selectedSort = props.sort

    const filteredItems = props.items.filter((item) => {
        //If all colors and all numbers, return same array
        if(selectedColor === 'all' && selectedNumber === 'all'){
            return item
        }
        //If all colors, return array where number is same than selected number
        if(selectedColor === 'all'){
            console.log(item.number, selectedNumber)
            return item.number === parseInt(selectedNumber)
        }
        //If all numbers, return array where color is same than selected color
        if(selectedNumber === 'all'){
            return item.color === selectedColor
        }
        //Return where color is same than selected color and number same than selected number
        return item.color === selectedColor && item.number === parseInt(selectedNumber)
    })


    //Sort items based on selected sort method
    if(selectedSort === 'number') {
        filteredItems.sort((a,b)=>a.number-b.number)
    }
    if(selectedSort === 'color') {
        filteredItems.sort((a,b)=>a.color.localeCompare(b.color))
    }


    return (
        <>
        <h1>List</h1>
        <Wrapper>
            {filteredItems.length
            ? 
                filteredItems.map((item, index) => {
                    return (<Item key={index} color={item.color} number={item.number} />)
                }) 
            :
                'No items found 😢'
            }
        </Wrapper>
        </>
    )
}

export default List

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    gap: 10px;
    @media(max-width: 860px){
        gap: 5px;
        max-height: 425px;
        overflow: auto;
    }
`