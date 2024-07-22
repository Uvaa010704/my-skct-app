import React from 'react'
import { useNavigate } from 'react-router-dom'
const Signup = () => {
const navigate=useNavigate()
const handleClick = () => {
navigate("/Login")
alert("You are Signed In")
 }
  return (
    <div>
      <center>
        <h1>WELCOME TO SKCT</h1>
        <fieldset>
        <form>
        <h1>SIGN UP</h1>
            <label>FName : </label><br/>
            <input></input><br/>
            <label>LName : </label><br/>
            <input></input><br/>
            <label>Mobile No : </label><br/>
            <input></input><br/>
            <label>Username : </label><br/>
            <input></input><br/><br/>
            <button onClick = {handleClick}>Submit</button>
        </form>
            </fieldset>
      </center>
    </div>
  )
}
export default Signup;