export const ADDDATAACTION =  (data) => {
  console.log("data in actions .js file", data);
  return { type: "ADDDATAACTION/ADD_DATA", payload: data }
  
//   return (dispatch) => {
//     console.log("DISPATCHED");
    
//     dispatch({ type: "ADDDATAACTION/ADD_DATA", payload: data });
//   };
};
