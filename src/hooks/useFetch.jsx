import { useState, useEffect } from "react";

export function useFetch(url) {
   const [data, setData] = useState();
   const [error, setError] = useState(false);

   useEffect(() => {
      const fetchData = async () => {
         try {
            const response = await fetch(url);
            if (response.ok) {
               response.json().then(data => setData(data));
            } else {
               response.json().then(data => console.log(data));
            }
         } catch (err) {
            setError(true);
         }
      }
   fetchData()}, [url])

   return { data, error }
}
