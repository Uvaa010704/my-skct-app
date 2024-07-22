import React, { useState } from 'react'
import axios from 'axios'

    const Axios = () => {
        const [apidata,setApidata]=useState()
        const [phone,setPhone]= useState()
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(response => {
          console.log("response----------->>>>",response);
          setApidata(response.data[0].name)
          setPhone(response.data[0].phone)
          
        })
   
  return (
    <div>
        <h1>Axios</h1>
        <h1>Name : {apidata}</h1>
        <h1>{phone}</h1>
    </div>
  )
}


export default Axios;