import React from 'react'

const ListItem1 = (props) => {
    console.log("props----->>>>>>",props.data)
    console.log("props===>>>>>>>>",props.data2)
    console.log("props===>>>>>>>>",props.data3)
    
  return (
    <div>
        <h1>List Values</h1>
        <ul>
            {
                props.data.map((list,index)=>(
                    <li key={index}>{list}</li>
                ))
            }
        </ul>
        <ol>
            {
                props.data2.map((list,index)=>(
                    <li key={index}>{list}</li>
                ))
            }
        </ol>
        <ol>
            {
                props.data3.map((list,index)=>(
                    <li key={index}>{list}</li>
                ))
            }
        </ol>

    </div>
  )
}

export default ListItem1