import styled from 'styled-components'
import { HexColorPicker } from "react-colorful"
import Color from './Color'
import React, { useState } from 'react'


const Generator = (props) => {

    const [color, setColor] = useState("#aabbcc")
    const [colors, setColors] = useState([])
    const [totalBoxes, setTotalBoxes] = useState(10)
    const [highestNum, setHighestNum] = useState(10)
    const [warning, setWarning] = useState()

    const setTotalBoxesHandler = (event) => {
        setTotalBoxes(event.target.value)
    }

    const setHighestNumHandler = (event) => {
        setHighestNum(event.target.value)
    }

    const generateItemsHandler = () => {
        if(!colors.length){
            setWarning('Set some colors first!')
        }else{
            setColors([])
            setWarning()
            props.generate(colors, totalBoxes, highestNum)
        }   
    }


    //Add new color
    const addColor = () => {
        if(!colors.includes(color)){
            setColors( arr => [...arr, color]);
        }
    }


    return (
        <Wrapper>
            <div className="gen-container">
                <h1>Generate boxes</h1>
                <HexColorPicker color={color} onChange={setColor} />
                <AddColorBtn onClick={addColor}>Add Color</AddColorBtn>
                <ColorWrapper>
                    {colors.map((clr, index) => {
                        return <Color key={index} selectedColor={clr} />
                    })}
                </ColorWrapper>
                <div className="generate-wrapper">
                    <div className="inputs">
                        <div className="input-wrapper">
                            <label htmlFor="totalBoxes">Total boxes:</label>
                            <input name="totalBoxes" type="number" value={totalBoxes} min="1" max="500" onChange={setTotalBoxesHandler}></input>
                        </div>
                        <div className="input-wrapper">
                            <label className="highestNum" htmlFor="highestNum">Highest Number:</label>
                            <input className="highestNum" name="highestNum" type="number" value={highestNum} min="1" max="500" onChange={setHighestNumHandler}></input>
                        </div>
                    </div>
                    {warning && <span className="warning">{warning}</span>}
                    <GenerateBtn onClick={generateItemsHandler}>Generate</GenerateBtn>
                </div>
            </div>
        </Wrapper>    
    )
}

export default Generator

const Wrapper = styled.div`
    width: 300px;
    height: 100vh;
    flex: 0.35;
    @media(max-width: 1230px){
        flex: 0.6;
    }
    border-left: 1px solid #767676;
    @media(max-width: 860px){
        border-top: 1px solid #767676;
        border-left: 0;
        width: 100%;
        height: auto;
        position: fixed;
        bottom: 0;
        top: auto;
        background-color: rgb(31, 30, 37)
    }
    position: sticky;
    top: 0;

    .gen-container{
        margin: 30px;
        margin-top: 50px;
        @media(max-width: 860px){
            h1{
                font-size: 15px;
                font-weight: 500;
            }
            margin: 20px;
        }
    }

    .generate-wrapper{
        position: absolute;
        bottom: 0px;
        left: 0px;
        right: 0px;
        width: calc(100% - 60px);
        margin: 30px;
        @media(max-width: 860px){
            position: relative;
            margin: 0px;
            width: 100%;
        }
    }

    .inputs{
        display: flex;
        justify-content: space-between;
        
        label{
            margin-bottom: 5px;
            display: block;
            @media(max-width: 860px){
                font-size: 12px;
            }
        }
    }

    .react-colorful {
        width: 100%;
        @media(max-width: 860px){
            height: 120px;
        }
    }
    .react-colorful__last-control {
        border-radius: 0 0 5px 5px;
    }
    .react-colorful__saturation{
        border-radius: 5px 5px 0px 0px;
    }

    .input-wrapper{
        flex: 1;
    }

    input{
        font-size: 20px;
        color: #fff;
        background-color: #1F1E25;
        padding: 0px 10px;
        border-radius: 5px;
        width: calc(100% - 29px);
        border: 1px solid #767676;
        display: block;
        height: 50px;

        @media(max-width: 860px){
            font-size: 12px;
            height: 30px;
        }
    }

    .warning{
        color: red;
        display: block;
        padding-top: 10px;
    }

    .highestNum{
        float: right;
    }
`

const ColorWrapper = styled.div`
    display: flex;
    gap: 5px;
    margin-top: 10px;
    flex-wrap: wrap;
    @media(max-width: 860px){
        margin-bottom: 10px;
    }
`

const AddColorBtn = styled.button`
    width: 100%;
    border: none;
    height: 40px;
    background-color: #1f1e25;
    border: 1px solid #ddd;
    border-radius: 5px;
    color: white;
    font-size: 20px;
    cursor: pointer;
    margin-top: 10px;

    &:hover{
        background-color: #2e2c36;
    }

    @media(max-width: 860px){
        font-size: 12px;
        height: 30px;
    }
`

const GenerateBtn = styled.button`
    width: 100%;
    border: none;
    height: 80px;
    background-color: #1f1e25;
    border: 1px solid #ddd;
    border-radius: 5px;
    color: white;
    font-size: 20px;
    cursor: pointer;
    margin-top: 10px;
    flex-basis: 100%;

    &:hover{
        background-color: #2e2c36;
    }

    @media(max-width: 860px){
        height: 40px;
    }
`