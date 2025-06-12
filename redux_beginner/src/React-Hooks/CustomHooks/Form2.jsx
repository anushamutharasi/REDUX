import React from 'react';
import useCustomHook from "./useCustomHook";

const Form2 = () => {
     const [name, submitHandler, namechangeHandler] = useCustomHook();
  return (
    <div>
      <h1>Form2</h1>
      Name: <input type="text" onChange={(e) => namechangeHandler(e)} />
      <button onClick={(e) => submitHandler(e)}>OK</button>
      Entered Name:<h3>{name}</h3>
    </div>
  );
}

export default Form2