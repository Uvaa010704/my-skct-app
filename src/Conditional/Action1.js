import React,{useState} from 'react'

const Action1 = () => {
    const [islogged,setIslogged] = useState(true)
    
    if(true){
        
    }
    else{
       
    }
    const handleopen = () =>
    {
setIslogged(false)
    }
    const handleclose = () =>
    {
        setIslogged(true)
    }
  return (
    <div  style={{backgroundColor:'GrayText'}}>
        <h1>This is a if statement</h1>
        { islogged &&
        <form>
            <label>username:</label>
            <input></input><br/>
            <label>password</label>
            <input></input>
        </form>
        }
        <button onClick = {handleopen}>close</button>
        <button onClick = {handleclose}>open</button>
    </div>
  )
}

export default Action1