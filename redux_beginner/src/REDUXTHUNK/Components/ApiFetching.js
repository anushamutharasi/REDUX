import React, { useState } from "react";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { ADDDATAACTION } from "../actions";
const ApiFetching = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log(state);
  
  //APIFECTCHING
  const FetchApi = () => {
    return async (dispatch, getState) => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users/2");
        const data = await res.json();
        console.log("DATA", data);
        dispatch(ADDDATAACTION(data));
      } catch (error) {
        console.error("API Fetch Error:", error);
      }
    };
  };
  return (
    <>
      <h1>ApiFetching using REDUX THUNK{state.action}</h1>
      <button
        type="button"
        onClick={() => {
          dispatch(FetchApi());
        }}
      >
        GET
      </button>
      <h1>{state.userData.name}</h1>
    </>
  );
};

export default ApiFetching;
