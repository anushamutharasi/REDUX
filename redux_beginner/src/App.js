import logo from './logo.svg';
import './App.css';
import "./Redux/Store"
// import "../src/REDUXTHUNK/redux_thunk_store"
import Importfiles from './React-Redux/Components/Importfiles';
// import ApiFetching  from "./REDUXTHUNK/Components/ApiFetching";
import Counter from './REDUX_TOOLKIT/components/Counter';
import UserCrudApp from './REDUX_TOOLKIT/components/UserCrudApp';
import Product from './REDUX_TOOLKIT/components/Product';
import TodoApp from './REDUX_TOOLKIT/components/TodoApp';


function App() {


  

  return (
    <div className="App">
      {/* <h1>Recat-Redux</h1>
      <Counter/> */}
      {/* <Importfiles/> */}
      {/* <UserCrudApp/> */}
      {/* <Product/> */}
      <TodoApp/>
    </div>
  );
}

export default App;
