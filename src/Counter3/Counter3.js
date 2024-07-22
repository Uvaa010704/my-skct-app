import React, { useState } from 'react'

const Counter3 = () => {
    const[data,setData]=useState(0)
    const handleCl=()=>{
        setData(data+1)
    }
    const handleclc=()=>{
        setData(data-1)
    }
  return (
    <div>
        <h1>Counter Component</h1>
        <button onClick={handleCl}>Increment</button>
        <h1>{data}</h1>
        <button onClick={handleclc}>Decrement</button>
    </div>
  )
}

export default Counter3 ;