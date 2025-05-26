import React, { useState } from "react";
import { v4 as uuid } from "uuid";
const LoginPage = () => {
  //state is used to collect the form values and
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  //state is used ti store the values
  const [loginDetails, setLoginDetails] = useState([]);
  const [editid, setEditid] = useState("");

  const SubmitHandler = (e) => {
    e.preventDefault();
    console.log("SUBMIT BUTTON IS CLICKEDXXX", uuid);
    if (editid) {
      const edited_login = loginDetails.map((user) =>
        user.id === editid ? { ...user, username, email } : "user"
      );
      setLoginDetails(edited_login);
      setEditid("");
      setEmail("");
      setUsername("");
    } else {
      console.log(username, email);
      const newLogin = { id: uuid().slice(0, 4), username, email };
      console.log(typeof newLogin);

      console.log("New Login", newLogin);
      if (username.trim() !== "" && email.trim() !== "") {
        console.log(loginDetails.length);
        setLoginDetails([...loginDetails, newLogin]);
      }
      console.log(loginDetails);
      setUsername("");
      setEmail("");
    }
  };
  //EditHandler
  const EditHandler = (id) => {
    setEditid(id);

    const login_user_to_edit = loginDetails.find((user) => user.id === id);
    console.log(login_user_to_edit);
    setUsername(login_user_to_edit.username);
    setEmail(login_user_to_edit.email);
  };
//DeleteHandler
const DeleteHandler=(id)=>{
  const deleted_user=loginDetails.filter((user)=>user.id!==id)
  setLoginDetails(deleted_user)
  
}
  return (
    <>
      <div>LoginPage</div>
      <h2>Enter Your Details</h2>
      <form onSubmit={(e) => SubmitHandler(e)}>
        <label>Username:</label>
        <input
          type="text"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <br></br>

        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br></br>
        <button type="submit">LOGIN</button>
      </form>
      {loginDetails?.length !== 0
        ? loginDetails?.map((user) => (
            <>
              <h2>{user.username}</h2>
              <h3>{user.email}</h3>
              <button onClick={() => EditHandler(user.id)}>Edit</button>
              <button onClick={()=>DeleteHandler(user.id)}>delete</button>
            </>
          ))
        : "NOdata found"}
    </>
  );
};

export default LoginPage;
