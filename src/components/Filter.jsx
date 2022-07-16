import styled from 'styled-components';
import React, { useState } from 'react';

const Filter = (props) => {

    const [color, setColor] = useState('all')
    const [number, setNumber] = useState('all')
    const [sort, setSort] = useState('default')

    const filterColor = (event) => {
        setColor(event.target.value);
        props.filter(event.target.value, number, sort)
    }

    const filterNumber = (event) => {
        setNumber(event.target.value);
        props.filter(color, event.target.value, sort)
    }

    const filterSort = (event) => {
        setSort(event.target.value);
        props.filter(color, number, event.target.value)
    }


    //Set object (Pass him an array and it will store only unique values)
    const colors  = [...new Set(props.items.map(item => item.color))];
    const numbers = [...new Set(props.items.map(item => item.number))];

    return (
        <>
        <h1>Filter</h1>
        <Wrapper>
            <div className="select-wrapper">
                <label>Color</label>
                <Select defaultValue={color} onChange={filterColor}>
                    <option value="all" default>All</option>
                    {colors.sort((a,b)=>a.localeCompare(b)).map((color, index) => { //Sort by number (ordered by color)
                        return (
                            <option style={{backgroundColor: color}} value={color} key={index}>{color}</option>
                        )
                    })}
                </Select>
            </div>
            <div className="select-wrapper">
                <label>Number</label>
                <Select defaultValue={number} onChange={filterNumber}>
                    <option value="all" default>All</option>
                    {numbers.sort((a,b)=>a-b).map((number, index) => { //Sort by number (increasing)
                        return (
                            <option value={number} key={index}>{number}</option>
                        )
                    })}
                </Select>
            </div>
            <div className="select-wrapper">
                <label>Sort by</label>
                <Select defaultValue={sort} onChange={filterSort}>
                    <option value="default" default>Default</option>
                    <option value="color" default>Color</option>
                    <option value="number" default>Number</option>
                </Select>
            </div>
        </Wrapper>
        </>
    )
}

export default Filter

const Select = styled.select`
    aspect-ratio: 1 / .2;
    max-height: 50px;
    font-size: 20px;
    color: #fff;
    background-color: #1F1E25;
    padding: 0px 10px;
    border-radius: 5px;
    width: 100%;

    @media(max-width: 860px){
        font-size: 12px;
    }
`

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    gap: 15px;

    .select-wrapper{
        flex: 1;
        label{
            display: block;
            font-size: 12px;
            padding-bottom: 5px;
        }
    }

    @media(max-width: 860px){
        gap: 5px;
    }
`