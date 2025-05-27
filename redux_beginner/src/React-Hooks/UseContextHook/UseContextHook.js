import React from "react";
import { useContext, createContext } from "react";
import "../../React-Hooks/Styles.css";

//Props Drilling
const ChildComponet3 = ({ name }) => {
  return <p>Username from childcomponent3{name}</p>;
};

const ChildComponet2 = ({ name }) => {
  return (
    <>
      <p>Username from childcomponent2{name}</p>
      <ChildComponet3 name={name} />
    </>
  );
};

const ChildComponet1 = ({ name }) => {
  // console.log("Name CC1",name);
  return (
    <>
      <p>Username from childcomponent1{name}</p>
      <ChildComponet2 name={name} />;
    </>
  );
};

//parent component

const UseContextHook = () => {
  const username = "ANUSHA";
  return (
    <div>
      <h2>UseContextHook</h2>
      <h3>Props drilling</h3>

      <ChildComponet1 name={username} />

      <ParentComponent />
    </div>
  );
};
export default UseContextHook;

//how use context solve the prop drilling problem
//Creating a Context Object it has 2 components one is consumer and another is provider
const NameContextObject = createContext();
export const ParentComponent = () => {
  const username1 = { name: "ansuha", id: 1 }; //context value
  return (
    <>
      <h1>I am Parent Component</h1>
      <NameContextObject.Provider value={username1}>
        <FirstChildComponent />
      </NameContextObject.Provider>
    </>
  );
};

const FirstChildComponent = () => {
  return (
    <>
      <h1>I am FirstChildComponent</h1>
      <SecondChildComponent />
    </>
  );
};

const SecondChildComponent = () => {
  const nameObj = useContext(NameContextObject);
  return (
    <>
      <h1>I am SecondChildComponent</h1>
      <h1>I am SecondChildComponent NAME :{nameObj.name}</h1>
      <ThirdChildComponent />
    </>
  );
};

const ThirdChildComponent = () => {
  //using the context here to consume the value(Username) by using useContext Hook
  const nameObj = useContext(NameContextObject);
  return (
    <>
      <h1>I am ThirdChildComponent NAME :{nameObj.name}</h1>
      <h1>I am ThirdChildComponent ID: {nameObj.id}</h1>
    </>
  );
};
