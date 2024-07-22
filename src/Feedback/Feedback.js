import React, { useState } from 'react'
import './Feedback.css'
import img3 from '../Images/25.jpg'
const Feedback = () => {
  const [comment,setComment]=useState();
  const change = (e) =>{
    setComment(e.target.value)
  }
  const submit = () =>{
    alert(comment)
  }
  return (
    <div>
        <fieldset className='fed1'>
          <center>
          <h1>FEEDBACK FORM</h1>
            <label className='l1'>Name : </label>
            <input type='text'></input><br></br>
            <label className='l2'>Reg No : </label>
            <input type='text'></input><br></br>
            <label className='l3'>Trainer's Name : </label>
            <input type='text'></input><br></br>
            <label className='l4'>Content Presentation : </label>
            <input type='radio' name="con"></input>
            <label className='l5'>5</label>
            <input type='radio' name="con"></input>
            <label className='l5'>4</label>
            <input type='radio' name="con"></input>
            <label className='l5'>3</label>
            <input type='radio' name="con"></input>
            <label className='l5'>2</label>
            <input type='radio' name="con"></input>
            <label className='l5'>1</label><br></br>
            <label className='l6'>Doubt Clarification : </label>
            <input type='radio' name="con1"></input>
            <label className='l7'>5</label>
            <input type='radio' name="con1"></input>
            <label className='l7'>4</label>
            <input type='radio' name="con1"></input>
            <label className='l7'>3</label>
            <input type='radio' name="con1"></input>
            <label className='l7'>2</label>
            <input type='radio' name="con1"></input>
            <label className='l7'>1</label><br></br>
            <label className='l8'>Interaction : </label>
            <input type='radio' name="con2"></input>
            <label className='l9'>5</label>
            <input type='radio' name="con2"></input>
            <label className='l9'>4</label>
            <input type='radio' name="con2"></input>
            <label className='l9'>3</label>
            <input type='radio' name="con2"></input>
            <label className='l9'>2</label>
            <input type='radio' name="con2"></input>
            <label className='l9'>1</label><br></br><br></br>
            <label>Comments : </label><br></br>
            <input type="text" style={{height:"50px",width:"200px"}} onChange={change}></input>
            </center><br></br>
            <a  href="mailto:guna.amypo@gmail.com" ><img src={img3} className='m'></img></a>
            <button className="s" onClick={submit}>Submit</button><br/>
            
        </fieldset>
    </div>
  )
}

export default Feedback
