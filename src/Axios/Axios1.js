import axios from 'axios';
import React, { useState } from 'react'
import {CircularProgress} from '@mui/material';

const Axios1 = () => {
    const [apidata,setApidata]=useState();
    const [loading,setLoading]=useState(true)
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then(response =>{
        setApidata(response.data[5].name);
        setLoading(false);
    })
  return (
    <div>
        { loading ?
        <CircularProgress /> :
        <h1>{apidata}</h1>
        }
    </div>
  )
}

export default Axios1
