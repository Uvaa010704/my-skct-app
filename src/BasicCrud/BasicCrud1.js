import React, { useEffect, useState } from 'react'
import axios from 'axios';
import UpdateIcon from '@mui/icons-material/Update';
import DeleteIcon from '@mui/icons-material/DeleteSharp';
import SendIcon from '@mui/icons-material/Send';
const BasicCrud1 = () => {
    const [tododata1,settoDodata1] =useState([]);
const [inputvalue, setInputvalue] = useState();
    useEffect(() => {
      axios.get("https://jsonplaceholder.typicode.com/posts")
      .then(response =>{
            console.log("tododata1======>>>>",response.data[0].title)
            settoDodata1(response.data)
      })
    }, []);
        const handleinput = (e) =>{
         setInputvalue(e.target.value);
        }
        const handleClick = () =>{
            axios.post("https://jsonplaceholder.typicode.com/posts",{title:inputvalue})
            .then(response =>{
                console.log("added=========>>>>>",response.data)
            settoDodata1([...tododata1,response.data])
            setInputvalue("")
        })
        }
        const handleDeleteTask =(id) =>{
                axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
                settoDodata1(tododata1.filter(task => task.id !== id));
        }
     


  return (
    <div>

        <h1>Basic Crud</h1>
        {
            tododata1 && tododata1.map(index => (
                <>
                <p key ={index.id}>{index.title}</p>
                
                <UpdateIcon></UpdateIcon> 
                <DeleteIcon onClick={()=>handleDeleteTask(index.id)}></DeleteIcon>

                </>
            ))
        }
        <br/>
        <br/>
        <input onChange={handleinput} value ={inputvalue}></input>
        <SendIcon onClick={handleClick}></SendIcon>
        
    </div>
  )
}

export default BasicCrud1