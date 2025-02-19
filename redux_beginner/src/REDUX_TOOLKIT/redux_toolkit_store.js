import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "./Reducers/CounterSlice";
import userReducer from "./Reducers/UserSlice"

console.log("REDUXTOOLKIT STORE", CounterReducer);

const redux_toolkit_store = configureStore({
  reducer: { counter: CounterReducer, user: userReducer },
});

export default redux_toolkit_store;
