import React, { useEffect, useState } from "react";
import useFetchApi from "./useFetchApi";

const URL = "https://jsonplaceholder.typicode.com/posts";
const SecondApi = () => {
    const [isLoading, data, isError] = useFetchApi(URL);
   if (isLoading) {
     return <h2>Loading...</h2>;
   }
   if (isError) {
     return <h3>Something went wrong</h3>;
   }
   console.log("DATAA", data);
 
   return (
     <div>
       <h2>SecondApi</h2>
       <h3>posts</h3>
       {data?.map((eachpost) => (
         <>
           <h2>{eachpost.title}</h2>
         </>
       ))}
     </div>
   );
}

export default SecondApi