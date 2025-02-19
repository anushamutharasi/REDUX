import { createSlice } from "@reduxjs/toolkit";

const initialState={
    value:0,
    
}

const CounterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
     state.value += 1;
    },
  },
});

//creating actions
console.log("ACTIONS",CounterSlice);

export const {increment}=CounterSlice.actions

//exporting reducers
console.log("Reducers", CounterSlice.reducer);
export  default CounterSlice.reducer

