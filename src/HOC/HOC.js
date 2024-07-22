import React,{useState} from 'react'


const withCounter = (WrappedComponent) => {
    return (props) => {
        const [count,SetCount] = useState(0);
        const incrementCount = () => {
            SetCount((prevCount)=> prevCount + 1);
        };
        return(
            <WrappedComponent
            count = {count}
            incrementCount={incrementCount}
            {...props}>

            </WrappedComponent>
        );
    };

};

  const DisplayCounter = ({count,incrementCount})=> (
    
      <div >
        <h1>HOC Example</h1>
        <p>Count : {count}</p>
        <button onClick={incrementCount}>Increment</button>
        
    

    </div>
  );
  const HOC =withCounter(DisplayCounter);

export default HOC


