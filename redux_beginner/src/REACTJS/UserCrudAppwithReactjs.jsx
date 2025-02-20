import React, { useState } from "react";

const UserCrudAppwithReactjs = () => {
  //store the inputs enterd by the user
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [editId,setEditId]=useState("")
  //state that is used to store the user information in the form of array of obects
  const [userDetails, setUserDetails] = useState([]);
  const [search, setSearch] = useState("");
  console.log(search);
  const SubmitHandler = (e) => {
    e.preventDefault();

    console.log("EDIT IDDDDDD",editId);

    if (editId) {
       setUserDetails((prevDetails) =>
         prevDetails.map((user) =>
           user.id === editId ? { ...user, userName, userEmail } : user
         )
       );
  setEditId("")
      setUserName("");
      setUserEmail("");
    } else {
      const newUser = { id: Date.now(), userName, userEmail };
      console.log("User in react js ", newUser);
      setUserDetails([...userDetails, newUser]);
      console.log(userDetails);
      setUserName("");
      setUserEmail("");
    }
  };




     const EditHandler=(id)=>{
        console.log("EDIT HANDLER",id);
        setEditId(id);
        const edituser=userDetails.find((user)=>user.id === id)
        console.log("EDIT_ID",editId);
        
        console.log(edituser);
        setUserName(edituser.userName)
        setUserEmail(edituser.userEmail)


     
     }
  const DeleteHnadler = (id) => {
    console.log(id);
    const delete_user=userDetails.filter((user)=>user.id!==id)
    console.log(delete_user);
    setUserDetails(delete_user)
  };
  return (
    <>
      <div>UserCrudApp</div>
      <input
        type="tetx"
        placeholder="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <form>
        USERNAME:
        <input
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          //   disabled={editId}
        />
        <br />
        Email:
        <input
          type="text"
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
        />
        <br />
        <button type="Submit" onClick={(id) => SubmitHandler(id)}>
          {editId ? "UPDATE" : "SUBMIT"}
        </button>
      </form>

      {userDetails?.length !== 0 ? (
        <>
          <>
            <table
              style={{
                border: "2px solid",
                marginLeft: "40%",
                marginTop: "3%",
              }}
            >
              <tr>
                <th>PRODUCT_ID</th>
                <th>PRODUCT_NAME</th>
                <th>PRODUCT_BODY</th>
                <th>ACTIONS</th>
              </tr>
              {userDetails?.map((user, index) => (
                <tr>
                  <td key={index}>{user.id}</td>
                  <td>{user.userName}</td>
                  <td>{user.userEmail}</td>
                  <td>
                    <button type="button" onClick={() => EditHandler(user.id)}>
                      Edit
                    </button>
                  </td>
                  <td>
                    <button
                      type="button"
                      onClick={() => DeleteHnadler(user.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </table>
          </>
        </>
      ) : (
        "There is no data"
      )}
      <h2 style={{color:"red"}}>
       Search results
      </h2>
      {/* {search.length !==0?():""} */}
      {search.length !==0?(
        userDetails.filter((user)=>user.userName.toLowerCase().includes(search.toLowerCase())).map((user) => (
        <h2>{user.userName}</h2>
      ))):""}
    </>
  );
};

export default UserCrudAppwithReactjs;
