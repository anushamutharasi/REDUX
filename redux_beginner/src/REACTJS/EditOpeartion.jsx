import userdata from "./UserData.json";
import React, { useState } from "react";

const EditOpeartion = () => {
    const [users,setUsers]=useState(userdata)
  const [Editvalue, setEditValue] = useState("");
  const [editId, setEditId] = useState("");
  const Name_Styles = {
    margin: "10px 35rem",
    padding: "10px",
    border: "solid 2px orange",
  };
  const EditHanlder = (id) => {
    console.log(id);
    //find the data by using id and find method to send the data to the input field and set the found data to setedited value
    
    const userToedit=userdata.find((user) => (user.id === id ));
    console.log("USER TO EDIT",userToedit);
    
    if(userToedit){
setEditId(id);
setEditValue(userToedit.name)
    }

  };
  const SubmitHandler = () => {
    console.log("edited", editId);
    //updating the users with edieted values
    const Update_Users = userdata.map((user) =>
      user.id == editId ? { ...user, name: Editvalue } : user
    );
    console.log(" Update_Users", Update_Users, Editvalue);
//set the updated users(values) to the setState variable to display the updated array of objects
    setEditValue(Update_Users);
    setUsers(Update_Users);
    setEditId("");
    setEditValue("");
  };
  return (
    <>
      <div>EditOpeartion</div>
      <input
        type="text"
        value={Editvalue}
        onChange={(e) => setEditValue(e.target.value)}
      ></input>
      <button onClick={SubmitHandler}>Submit</button>
      {users?.map((user) => (
        <>
          <h1 style={Name_Styles}>{user.name}</h1>
          <button onClick={() => EditHanlder(user.id)}>Edit</button>
          <br />
        </>
      ))}
    </>
  );
};

export default EditOpeartion;
