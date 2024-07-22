import React from 'react'
import ListItem1 from './ListItem1';

const Array1 = () => {
    const Arr1 = [1,2,3,4,5,6,7,8,9,0];
    const Arr2 = [1,"welcome"];
    const Arr3 = ["Hello","My","Friend"]
  return (
    <div>
        <h1>ArrayComponent</h1>
        <ListItem1 data={Arr1} data2={Arr2} data3={Arr3}/>
    </div>
  )
}

export default Array1