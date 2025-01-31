import { act } from "react";
import { combineReducers, createStore } from "redux";

const initialState = {
  balance: 0,
  FirstName: "",
  Mobile: null,
};
function accountreducer(state = initialState, action) {
  console.log("RESET ACTION IN REDUCER");
  
  switch (action.type) {
    case "Deposite":
      return { ...state, balance: state.balance + +action.payload };
    case "Withdraw":
      return { ...state, balance: state.balance - +action.payload };
    case "NameUpdate":
      return { ...state, FirstName: (state.FirstName = action.payload) };
    case "MobileUpdate":
      return { ...state, Mobile: (state.Mobile = action.payload) };
    case "reset":
      return initialState;
    default:
      return state;
  }
}

function Transaction_Reducer( state=[],action){
   console.log("Transaction ACTION IN REDUCER");
  switch(action.type){
    case "ADD_TRANSACTION":
      //here type means credit or debit
      return [...state,{amount:action.payload.amount,date:action.payload.date,type:action.payload.type}]

      default:
        return state

  }

}

const rootReducer = combineReducers({
  account: accountreducer,
  transaction:Transaction_Reducer
});

export const store = createStore(rootReducer);
