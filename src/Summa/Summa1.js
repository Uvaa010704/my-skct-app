import React from 'react'

const Summa1 = (props) => {
    console.log("props------->>>>>",props.data)
    console.log("props------------>>>",props.data1)
  return (
    <div>
        <h1>hi</h1>
        <ul>
            {
                props.data.map((list,index)=>(
                    <li key={index}>{list}</li>
                ))
            }
        </ul>
        <ol>
            {
                props.data.map((list,index)=>(
                    <li key = {index}>{list}</li>
                ))
            }
        </ol>
        <h1>{props.data2}</h1>
        <h1>{props.data3}</h1>
    </div>
  )
}

export default Summa1