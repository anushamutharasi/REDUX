import React from 'react'
import {  useSelector } from "react-redux";

const Accountdetails = () => {
  const DataFromstore=useSelector((state)=>{
    return state
  })
  console.log(DataFromstore);
  

  return (
    <div>
   
      <h2>FirstName:{DataFromstore.FirstName}</h2>
      <h2>MobileNO:{DataFromstore.Mobile}</h2>
      <h2>Balance:{DataFromstore.balance}</h2>
    </div>
  );
}

export default Accountdetails