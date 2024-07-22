import React from 'react'

import { useNavigate } from 'react-router-dom'
const Login = () => {
  const handlechange = (e) =>{
    console.log(e.target.value)
}
  const navigate=useNavigate()
 const handlealert = () => {
navigate("/Home")
alert("Logged In submitted successfully")
 }
 const gate = () =>{
  navigate("/")
 }
 return (
    <div>
 <fieldset>
      <center>
 <h1>Login Form</h1>
 <form>
    <label>Username : </label><br/>
    <input onChange={handlechange}></input> <br/><br/>
    <label>Password : </label><br/>
    <input></input><br/><br/>
 </form>
 <button onClick = {handlealert}>Log In</button>
 <button onClick = {gate}>Back</button>
 </center>
 </fieldset>
  </div>
)
}
export default Login
