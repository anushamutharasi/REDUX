import React from "react";
import useFetchApi from "./useFetchApi";

const URL ="https://jsonplaceholder.typicode.com/users";
const FirstApi = () => {

const [isLoading,data,isError]=useFetchApi(URL)


  
  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  if (isError) {
    return <h3>Something went wrong</h3>;
  }
  console.log("DATAA", data);

  return (
    <div>
      <h2>FirstApi</h2>
      <h3>Users</h3>
      {data?.map((eachuser) => (
        <>
          <h2>{eachuser.name}</h2>
        </>
      ))}
    </div>
  );
};

export default FirstApi;
