import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addUser, deleteUser, editUser } from "../Reducers/UserSlice";

const UserCrudApp = () => {
  const [name, setName] = useState("");
  const [id,setId]=useState()
  const { data } = useSelector((store) => store.user);
  console.log(name);
  const dispatch = useDispatch();

  return (
    <>
      <div>
        UserCrudApp Using arrays and reduxtoolkit
        {data?.map((user, index) => (
          <>
            <h1 key={index}>{user.name}</h1>
            <button type="submit" onClick={() =>{
                 setId(user.id)
                 setName(user.name)}}>
              Edit
            </button>
            <button type="submit" onClick={() => dispatch(deleteUser(user.id))}>
              Delete
            </button>
          </>
        ))}
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />{" "}
        <br></br>
        <button type="submit" onClick={() =>{if(id){
            dispatch(editUser({id:id,name}))
            setName("")
            setId("");

        }
            else{
dispatch(addUser(name))
setName("")

            }
        } }>
         {id?"UPDATE":"SAVE"} 
        </button>
      </div>
    </>
  );
};

export default UserCrudApp;
