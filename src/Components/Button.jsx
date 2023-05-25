import React from 'react'
import "./Button.css"

const Button = ({setResult,result}) => {
    const handleResult =(e)=>{
        setResult(result + e.target.value)}
    const calculate =()=>{
        try{
            setResult(eval(result))
        }
        catch{
            setResult("ERROR")
        }
    }
  return (
    <div className='container'>
        <div className='btn'>
            <button onClick={handleResult} value={7}>7</button>
            <button onClick={handleResult} value={8}>8</button>
            <button onClick={handleResult} value="9">9</button>
            <button value="/" onClick={handleResult}  className='clr'>/</button>
        </div>
        <div className='btn'>
            <button onClick={handleResult} value={4}>4</button>
            <button onClick={handleResult} value={5}>5</button>
            <button onClick={handleResult} value={6}>6</button>
            <button value="+" onClick={handleResult}  className='clr'>+</button>
        </div>
        <div className='btn'>
            <button onClick={handleResult} value={1}>1</button>
            <button onClick={handleResult} value={2}>2</button>
            <button onClick={handleResult} value={3}>3</button>
            <button value="-" onClick={handleResult}  className='clr'>-</button>
        </div>
        <div className='btn'>
            <button onClick={handleResult} value={0}>0</button>
            <button value="." onClick={handleResult}  className='clr'>.</button>
            <button value="=" onClick={calculate}  className='clr'>=</button>
            <button value="*" onClick={handleResult}  className='clr'>*</button>
            
        </div>
    </div>
  )
}

export default Button