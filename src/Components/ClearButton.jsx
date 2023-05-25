import React from 'react'
import "./ClearButton.css"

const ClearButton = ({setResult , result}) => {
  const backSpace =()=>{
    try{
        setResult(result.slice(0,-1))
    }
    catch{
      console.log("error")
    }
    }
    const clearValue =()=>{
      setResult("")
    }
  return (
    <div>
        <button  onClick={clearValue}>
            clear
        </button>
        <button onClick={backSpace} >c/ce</button>
    </div>
  )
}

export default ClearButton