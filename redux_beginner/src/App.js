import logo from './logo.svg';
import './App.css';
import "./Redux/Store"
// import "../src/REDUXTHUNK/redux_thunk_store"
import Importfiles from './React-Redux/Components/Importfiles';
// import ApiFetching  from "./REDUXTHUNK/Components/ApiFetching";
import Counter from './REDUX_TOOLKIT/components/Counter';



function App() {


  

  return (
    <div className="App">
      <h1>Recat-Redux</h1>
      <Counter/>
      {/* <Importfiles/> */}
    </div>
  );
}

export default App;
