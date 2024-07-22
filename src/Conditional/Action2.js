import React, { useState } from 'react'

const Action2 = () => {
    const [user,setUser] = useState("UVAA")
    const handleLogOut = () =>
    {
        setUser("")
    }
    const handleLogIn = () =>
    {
        setUser("STUDENT")
    }
  return (
    <div style={{backgroundColor:'powderblue'}}>
        { user?
        <h1>WELCOME {user}!!!</h1>:
        <h1>New user Login to continue....</h1>
        }
        <button onClick ={handleLogOut}>LogOut</button>
        <button onClick = {handleLogIn}>LogIn</button>
    </div>
  )
}

export default Action2