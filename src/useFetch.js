import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [IsPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();
    setTimeout(() => {
      console.log("Json Rendered");
      fetch(url , {signal: abortCont.signal})
        .then((res) => {
          if (!res.ok) {
            throw Error("Data Can't able to fetch 😔");
          }
          return res.json();
        })
        .then((data) => {
          setData(data);
          setIsPending(false);
          setError(null);
        })
        .catch((err) => {
          if(err.name === "AbortError"){
            console.log("Fetch Aborted");
          }else{
            setError(err.message);
            setIsPending(false);
          }
        });
    }, 1000);
    return () => abortCont.abort();
      }, [url]);
  return { data, IsPending, error };
};
export default useFetch;
