import React, { useState } from 'react'

const Action3 = () => {
const [hi,setHi] = useState("Who are you?")

    if (true) { 

    }
    else 
    {

    }
    const handleN = () => {
        setHi("What is your name?")
        alert("Next !!!!!")
    }
    const handleB = () => {
        setHi("Who are you?")
        alert("Back !!!!!")
    }
  return (
    <div style={{backgroundColor:'wheat'}}>
        <h1>{hi}</h1>
        <button onClick ={handleN}>Next</button>
        <button onClick = {handleB}>Back</button>
        
    </div>
  )
}

export default Action3