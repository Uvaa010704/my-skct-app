import React, { useState } from 'react'
import Hook1 from './Hook1';

const Hook = () => {
    const[count, setCount ]=useState(0);
    const[input, setInput]=useState()
    const increment=()=>{
        setCount(count+1)
    }
    const decrement=()=>{
        setCount(count-1)
    }
    const handlechange=(e)=>
    {
    setInput(e.target.value)
    }
  return (
    <div>
        <h1>Hook</h1>
        
        <button onClick={increment}>+</button>
        <br/>
        <button onClick={decrement}>-</button><br/>
        <input onChange={handlechange}></input>
        <Hook1 data={count}/>
    </div>
  )
}

export default Hook