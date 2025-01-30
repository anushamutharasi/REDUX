//Using only redux
//Installation===npm install redux
import { createStore } from "redux";

//intilization of state

const initialState = {
  firstName: "Preveen",
  lastName: "",
};

//creating a reducer

function LoginReducer(state = initialState, action) {
  console.log("step3");
  switch (action.type) {
    case "FIRSTNAME":
      return { ...state, firstName: (state.firstName = action.payload) };
    case "LASTNAME":
      return { ...state, lastName: (state.lastName = action.payload) };

    default:
      return state;
  }
}

//passing reducer to creating store function
console.log(createStore);
 const store = createStore(LoginReducer);
console.log(store);

console.log("step1")
console.log(store.getState());
console.log("step2");

store.dispatch({type:"FIRSTNAME",payload:"Anusha "})
store.dispatch({ type: "LASTNAME", payload: "Muthrasi" });
console.log(store.getState())
