import { createStore } from "redux";

const initialState = {
  balance: 0,
  FirstName: "",
  Mobile: null,
};
function namereducer(state = initialState, action) {
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

export const store = createStore(namereducer);
