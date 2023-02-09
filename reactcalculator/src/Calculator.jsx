import React from 'react'
import { useState } from 'react'

const Calculator = () => {

    let [input, setInput] =useState(""); 
    let [result, setResult]= useState(0)

    let keyPressed = (e) => {

        setInput(input + e.target.value)


    }

    let changeInput = (e)=>{
        setInput(e.target.value)
        console.log(input)
    }

    let calculate = (e) =>{
        result = eval(input)
        console.log(result)
        setResult(result)
    }
    return (
        <>  <h1>
            Calculator
        </h1>
            <div>
                <input type="text" value={input} onChange={changeInput}></input>
                <button onClick={calculate}> Calculate</button>
            </div>
            <div>
                <button value={7} onClick={keyPressed}>7</button>
                <button value={8} onClick={keyPressed}>8</button>
                <button value={9} onClick={keyPressed}>9</button>
                <button value={"+"} onClick={keyPressed}>+</button>
            </div>
            <div>
                <button value={4} onClick={keyPressed}>4</button>
                <button value={5} onClick={keyPressed}>5</button>
                <button value={6} onClick={keyPressed}>6</button>
                <button value={"-"} onClick={keyPressed}>-</button>
            </div>
            <div>
                <button value={1} onClick={keyPressed}>1</button>
                <button value={2} onClick={keyPressed}>2</button>
                <button value={3} onClick={keyPressed}>3</button>
                <button value={"*"} onClick={keyPressed}>*</button>
            </div>
            <div>
                <button value={0} onClick={keyPressed}>0</button>
                <button value={"."} onClick={keyPressed}>.</button>
                <button value={"/"} onClick={keyPressed}>/</button>
                <button value={"="} onClick={calculate}>=</button>
            </div>
            <div>
                <h2>Result: {result}</h2>
            </div>
        </>

    )
}

export default Calculator