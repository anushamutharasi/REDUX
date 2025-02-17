import logo from './logo.svg';
import './App.css';
import "./Redux/Store"
import "../src/REDUXTHUNK/redux_thunk_store"
import Importfiles from './React-Redux/Components/Importfiles';
import ApiFetching  from "./REDUXTHUNK/Components/ApiFetching";

function App() {


  

  return (
    <div className="App">
      <h1>Recat-Redux</h1>

      {/* <Importfiles/> */}
      <ApiFetching />
    </div>
  );
}

export default App;
