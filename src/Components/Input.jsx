import React from 'react'
import "./Input.css"
 
const Input = ({result}) => {
  
  return (
    <div className='indiv' >
        <input className='in' type='text' placeholder='0' value={result}/>
    </div>
  )
}

export default Input