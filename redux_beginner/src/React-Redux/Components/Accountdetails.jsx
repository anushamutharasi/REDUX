import React from 'react'
import {  useSelector } from "react-redux";

const Accountdetails = () => {
  const DataFromstore=useSelector((state)=>{
    return state
  })
  //console.log("Tranction details",DataFromstore?.transaction[0]?.type);
  

  return (
    <>
      <div>
        <h2>FirstName:{DataFromstore.account.FirstName}</h2>
        <h2>MobileNO:{DataFromstore.account.Mobile}</h2>
        <h2>Balance:{DataFromstore.account.balance}</h2>
      </div>
      <h1>Transcaction details</h1>
      {DataFromstore.transaction.length !== 0 ? (
        <>
          {/* <h2>TYPE:{DataFromstore?.transaction[0]?.amount}</h2>
          <h2>TYPE:{DataFromstore?.transaction[0]?.date}</h2>
          <h2>TYPE:{DataFromstore?.transaction[0]?.type}</h2> */}
          {DataFromstore?.transaction?.map((detail, i) => (
            <>
              <h1>TYPE:{detail.type}</h1>
              <h3>AMOUNT:{detail.amount}</h3>
              <h4>Date:{detail.date.toString()}</h4>
            </>
          ))}
        </>
      ) : (
        ""
      )}
      {/* <h2>type:{DataFromstore.transction[0]?.type}</h2> */}
    </>
  );
}

export default Accountdetails