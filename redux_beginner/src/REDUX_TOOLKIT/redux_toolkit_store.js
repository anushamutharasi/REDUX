import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "./Reducers/CounterSlice";
import userReducer from "./Reducers/UserSlice";
import productReducer from "./Reducers/ProductSlice";
import todoReducer from "./Reducers/TodoSlice"

console.log("REDUXTOOLKIT STORE", CounterReducer);

const redux_toolkit_store = configureStore({
  reducer: {
    counter: CounterReducer,
    user: userReducer,
    product: productReducer,
    todo:todoReducer
  },
});

export default redux_toolkit_store;
