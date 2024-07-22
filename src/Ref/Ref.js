import React, {useEffect,useRef} from 'react';

const Ref = () => {
    const inputRef = useRef();
    useEffect(()=>{
        inputRef.current.focus();
    },[]);

  return (
    <div>
        <label htmlFor="myInput">Enter Something:</label>
        <input tye="text" id="myInput" ref={inputRef}/>
    </div>
  );
};

export default Ref;