import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "./CounterSlice"

console.log("REDUXTOOLKIT STORE",CounterReducer);

const redux_toolkit_store = configureStore({
  reducer: { counter: CounterReducer },
});

export default redux_toolkit_store;
