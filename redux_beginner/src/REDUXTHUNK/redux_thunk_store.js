
import { createStore,applyMiddleware } from "redux";

import {thunk} from "redux-thunk";

console.log("Redux-Thunk Store");
const initialState= {
    action:null,
    userData:{

    }
}


//Reducer function
function ApiReducer(state=initialState,action){
    console.log(action.type,action.payload);
    
    switch (action.type) {
      case "ADDDATAACTION/ADD_DATA":
        return { ...state, action: action.type, userData: action.payload };

      default:
        return state;
    }
 

}

 const redux_thunk_store = createStore(ApiReducer,applyMiddleware(thunk));
 export { redux_thunk_store };


