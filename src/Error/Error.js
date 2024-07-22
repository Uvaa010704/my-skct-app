import axios from 'axios';
import React, { useState } from 'react'

const Error = () => {
    const [crud,setCrud]=useState();
    const [error,setError]=useState();

    const handle = async () =>{
        try{
            const response =await axios.get("https://jsonplaceholder.typicode.com/users/")
            setCrud(response.data[0].id)
        }
        catch(error){
            setError(error.message || "Error")
        }
    }
  return (
    <div>
        
        <h1>Crud</h1>
        <button onClick={handle}>Click</button>
        <p>{error}</p>
        <p>{crud}</p>
    </div>
  )
}

export default Error
