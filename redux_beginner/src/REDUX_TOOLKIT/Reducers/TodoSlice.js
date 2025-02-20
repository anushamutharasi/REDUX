import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todo: [],
};

const TodoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addtodo: (state, action) => {
      state.todo.push(action.payload);
    },
    deletetodo: (state, action) => {
      console.log(action);
      let index = state.todo.findIndex((todo) => todo.id === action.payload);
      state.todo.splice(index,1);
    },
    edittodo:(state,action)=>{
     let index = state.todo.findIndex((todo) => todo.id === action.payload.id);  
     state.todo[index]=action.payload 

    }
  },
});
//generating actions
export const { addtodo, deletetodo, edittodo } = TodoSlice.actions;
//generating reducers
export default TodoSlice.reducer;
