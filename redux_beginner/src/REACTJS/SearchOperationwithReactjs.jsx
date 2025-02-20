import React, { useState } from "react";
import userdata from "./UserData.json";

const SearchOperationwithReactjs = () => {
  console.log(userdata);
  const [search, setSearch] = useState("");
  console.log(search);
  

  return (
    <>
      <h1>SearchOperationwithReactjs and JSON FILE</h1>
      <input
        type="tetx"
        placeholder="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {userdata.filter((user)=>user.name.toLowerCase().includes(search.toLowerCase())).map((user) => (
        <>
          <h3
            style={{
              border: "2px solid black",
              maxWidth: "70%",
              margin: "2%",
              padding: "5px",
            }}
          >
            {user.name}
          </h3>
        </>
      ))}
    </>
  );
};

export default SearchOperationwithReactjs;
