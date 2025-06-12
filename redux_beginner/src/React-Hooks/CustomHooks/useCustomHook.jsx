import React,{useState} from 'react'

const useCustomHook = () => {
  const [name, setName] = useState();

  const namechangeHandler=(e)=>{
    
    setName(e.target.value);
    console.log("name in custom hook",name);
    
  }

  const submitHandler=(e)=>{

    e.preventDefault();
   console.log("entered name",name);
   



  }
return [name,submitHandler, namechangeHandler]



 
}

export default useCustomHook