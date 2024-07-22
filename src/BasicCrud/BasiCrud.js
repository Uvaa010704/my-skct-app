import React, { useEffect, useState } from 'react'
import axios from 'axios';
const BasiCrud = () => {
    const [tododata1,settoDodata1] =useState([]);
const [inputvalue, setInputvalue] = useState();
    useEffect(() => {
      axios.get("https://retoolapi.dev/BsCQ5o/exam")
      .then(response =>{
            console.log("tododata1======>>>>",response.data[0].title)
            settoDodata1(response.data)
      })
    }, []);
        const handleinput = (e) =>{
         setInputvalue(e.target.value);
        }
        const handleClick = () =>{
            axios.post("https://retoolapi.dev/BsCQ5o/exam",{Name:inputvalue})
            .then(response =>{
                console.log("added=========>>>>>",response.data)
            settoDodata1([...tododata1,response.data])
            setInputvalue("")
        })
        }
        const handleDeleteTask =(id) =>{
                axios.delete(`https://retoolapi.dev/BsCQ5o/exam/${id}`);
                settoDodata1(tododata1.filter(task => task.id !== id));
        }


  return (
    <div>

        <h1>Basic Crud</h1>
        <input onChange={handleinput} value ={inputvalue}></input>
        <button onClick = {handleClick}>Add</button>
        {
           tododata1 && tododata1.map(index => (
            <>
                <p key ={index.id}>{index.Name}</p>
                <button>Update</button>
                <button onClick={()=>handleDeleteTask(index.id)}>Delete</button>
                </>
            ))
        }
    </div>
  )
}

export default BasiCrud