import { useContext } from "react"
import React  from 'react';
import MyContext from "./MyContext";

const ComponentA = () => {
    const{myValue,setMyValue}=useContext(MyContext);
    const changeValue=()=>
    {
        setMyValue("NewValue")
    }
  return (
    
        <div style={{backgroundColor:'wheat'}}>
        
        <p style={{color:'chocolate'}}>Value from Context: {myValue}</p>
        <button onClick={changeValue}>change Value</button>
        
    </div>

    
  )
}

export default ComponentA