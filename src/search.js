import { useState, useEffect } from "react";
import { movies } from "./data";

export default function useSearch(data) {
  const [search, setSearch] = useState([]);
  const [status, setStatus] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!data) {
      setSearch([]);
      console.log("not found");
    } else {
      searchMovies();
    }

    async function searchMovies() {
      try {
        const exist = new Promise((resolve,reject)=>{
        const found = movies.filter((item) => item.name === data); // we can use find method to return string value instead of filter.
         if(found[0]){
            return resolve(found);
         }else{
            return reject('no movie found');
         }
        });
        
        const found = await exist;
          setSearch(found);
          setStatus(true);

      } catch (error) {
        setError(error);
      }
    }

    return ()=>{
        setSearch([])
    }
  }, [data]);

  return [search, error, status];
}
