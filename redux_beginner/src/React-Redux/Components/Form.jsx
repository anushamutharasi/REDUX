import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  depositeAction,
  withdraAction,
  FirstnameAction,
  MobileAction,
  reset,
} from "../actions";
const Form = () => {
  const dispatch = useDispatch();
  const [balance, setBalance] = useState(0);
  const [FirstName, setFirstName] = useState("");
  const [Mobile, setMobile] = useState(null);

  const DepositeHandler = (e) => {
    e.preventDefault();
    //console.log(e.target.value, balance,FirstName,Mobile);
    dispatch(depositeAction(balance));
    dispatch({ type: "ADD_TRANSACTION",payload:{
      amount:balance,
      date:new Date(),
      type:"CREDIT"
    } });
    setBalance("")
  };
  const WithdrawHandler = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    dispatch(withdraAction(balance));
    dispatch({
      type: "ADD_TRANSACTION",
      payload: {
        amount: balance,
        date: new Date(),
        type: "DEBIT",
      },
    });
    setBalance("")
  };
 const FirstNameUpdateHandler=(e)=>{
     e.preventDefault();
    dispatch(FirstnameAction(FirstName));
    setFirstName("")

 }
  const MobileUpdateHandler = (e) => {
     e.preventDefault();
    dispatch(MobileAction(Mobile));
    setMobile("")
  };
   const ResetHandler = (e) => {
     e.preventDefault();
     console.log("reset");
     
    dispatch(reset());
    
  };


  return (
    <>
      <form>
        <input
          type="number"
          name="balance"
          id=""
          placeholder="Enter amount"
          value={balance}
          onChange={(e) => setBalance(e.target.value)}
        />
        <button value="Deposite" onClick={(e) => DepositeHandler(e)}>
          Deposite
        </button>
        <button value="Withdraw" onClick={(e) => WithdrawHandler(e)}>
          Withdraw
        </button>
        <br />
        <input
          type="text"
          name="FirstName"
          id=""
          placeholder="enter name"
          value={FirstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <button value="Deposite" onClick={FirstNameUpdateHandler}>
          Update
        </button>
        <br></br>
        <input
          type="number"
          name="Mobile"
          id=""
          placeholder="enter mobile number"
          value={Mobile}
          onChange={(e) => setMobile(e.target.value)}
        />
        <button type="submit" onClick={MobileUpdateHandler}>
          Update
        </button>
        <br></br>
        <button  onClick={ResetHandler}>
          Reset
        </button>
        <br></br>
      </form>
    </>
  );
};

export default Form;
