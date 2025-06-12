import React from "react";
import { useContext, createContext } from "react";
import "../../React-Hooks/Styles.css";

//Props Drilling
const ChildComponet3 = ({ name }) => {
  return <h4>Username from childcomponent3{name}</h4>;
};

const ChildComponet2 = ({ name }) => {
  return (
    <>
      <h4>Username from childcomponent2{name}</h4>
      <ChildComponet3 name={name} />
    </>
  );
};

const ChildComponet1 = ({ name }) => {
  // console.log("Name CC1",name);
  return (
    <>
      <h4>Username from childcomponent1{name}</h4>
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
      <h4>I am Parent Component</h4>
      <NameContextObject.Provider value={username1}>
        <FirstChildComponent />
      </NameContextObject.Provider>
    </>
  );
};

const FirstChildComponent = () => {
  return (
    <>
      <h4>I am FirstChildComponent</h4>
      <SecondChildComponent />
    </>
  );
};

const SecondChildComponent = () => {
  const nameObj = useContext(NameContextObject);
  return (
    <>
      <h4>I am SecondChildComponent</h4>
      <h4>I am SecondChildComponent NAME :{nameObj.name}</h4>
      <ThirdChildComponent />
    </>
  );
};

const ThirdChildComponent = () => {
  //using the context here to consume the value(Username) by using useContext Hook
  const nameObj = useContext(NameContextObject);
  return (
    <>
      <h4>I am ThirdChildComponent NAME :{nameObj.name}</h4>
      <h4>I am ThirdChildComponent ID: {nameObj.id}</h4>
    </>
  );
};
