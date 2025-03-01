import React, { useEffect, useState } from "react";
import UserCard from "./UserCard";

const Crud_with_Fetch = () => {
  //this state is used to store the values comes from api
  const [users, setUsers] = useState([]);
  //this state is used to collect the data from the form to post the new data
  const [newUser, setNewUser] = useState("");
console.log("USERS",users);

  //GET CALL
  useEffect(() => {
    fetch("https://67c15c3961d8935867e2ae9b.mockapi.io/api/users")
      .then((response) => {
        //console.log("RESPONSE.JSON",response.json());
        //it will also return promise , so we can use another then for converting promise to json object
        return response.json();
      })
      .then((data) => setUsers(data));
  }, []);
  //POST CALL
  const Create_user = () => {
    fetch("https://67c15c3961d8935867e2ae9b.mockapi.io/api/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .then((data) => setUsers([data, ...users]))
      .catch((error) => console.log("Error in creating a new user", error));
    console.log("NEW USER", newUser);
  };
//EDIT CALL
const Edit_Handler=(id)=>{
  console.log(id);
  const userToEdit=users.find((user)=>user.id===id)
  console.log('???????????????');
  if(userToEdit){
 setNewUser({ name: userToEdit.name, Image: userToEdit.Image });
 console.log("USERS IN EDIT", users);
 fetch("https://67c15c3961d8935867e2ae9b.mockapi.io/api/users/"+id,{
 method:"PUT",
headers:{"Content-Type":"application/json"},
body:JSON.stringify(newUser)
})
.then((res)=>res.json())
.then((updatedUser)=>{
  setUsers(users.map((user)=>(user.id===id?updatedUser:user)))
  setNewUser({name:"",Image:""})
})

.catch((err)=>console/console.log("Error  updating user",err)
)


  }
 
  
  
  

}


















//DELETE CALL

const Delete_Handler=(id)=>{
  console.log(id,"https://67c15c3961d8935867e2ae9b.mockapi.io/api/users/"+id);
  
  fetch("https://67c15c3961d8935867e2ae9b.mockapi.io/api/users/"+id, { method: "DELETE" })
    .then(() => {
      setUsers(users.filter((user) => user.id !== id));
    })
    .catch((error) => console.error("Error deleting post:", error));

  }
  return (
    <>
      <div>Crud_with_Fetch using React</div>
      <input
        type="text"
        placeholder="Name"
        value={newUser.name}
        onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
      />
      <br></br>
      <input
        type="url"
        placeholder="Enter URL"
        value={newUser.Image}
        onChange={(e) => setNewUser({ ...newUser, Image: e.target.value })}
      />
      <br></br>
      <button onClick={Create_user}>Add User</button>
      <br />
      {/* displaying all users by using map function */}
      {users?.length !== 0
        ? users?.map((user) => (
            <>
              <UserCard key={user.id} userdata={user} Delete_Handler={Delete_Handler} Edit_Handler={Edit_Handler} />
            </>
          ))
        : "No data"}
    </>
  );
};

export default Crud_with_Fetch;
