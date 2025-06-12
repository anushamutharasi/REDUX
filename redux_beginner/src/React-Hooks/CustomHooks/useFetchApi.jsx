import React, { useEffect, useState } from "react";

const useFetchApi = (URL) => {
    console.log(URL);
    
  const [data, setData] = useState();
  const [isLoading, setIsloading] = useState(false);
  const [isError, setIsError] = useState(false);

  const makeApicall = async () => {
    setIsloading(true);
    setIsError(false);
    try {
      const response = await fetch(URL);
      const comingData = await response.json();
      console.log(comingData);
      setData(comingData);
      setIsloading(false);
    } catch {
      setIsError(true);
      setIsloading(false);
    }
  };
  useEffect(() => {
    makeApicall();
  }, []);
  
  console.log("DATAA", data);
  return [isLoading,data,isError]
};

export default useFetchApi;
