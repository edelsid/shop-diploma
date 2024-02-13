import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

export function SearchBar({ searchCallback }) {
   const [data, setData] = useState('');
   const searched = useSelector(state => state.root.site.searchQuery);

   const saveInput = (e) => {
      e.preventDefault();
      searchCallback(data);
   }

   const inputChange = (e) => {
      setData(e.target.value);
   }
   
   useEffect(() => {
      if (searched.length > 0) {
         setData(searched);
      }
      return (() => setData(''));
   }, []);

   return (
   <form 
      className="catalog-search-form form-inline" onSubmit={saveInput}>
      <input 
         className="form-control"
         placeholder="Поиск"
         onChange={inputChange}
         value={data}>
      </input>
   </form>
   )
}
