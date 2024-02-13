import { Link } from "react-router-dom"
import { useState,useEffect } from "react";

export function Category({ item, callback, active }) {  
   const {id, title} = item;
   const [act, setAct] = useState(false);

   const changeCat = (e) => {
      e.preventDefault();
      callback(id);
   }

   useEffect(() => {
      if (id === active) {
         setAct(true);
      }
   }, []);

   return (
   <li className="nav-item">
      <Link 
         className={"nav-link" + (act ? " active" : "")} 
         onClick={changeCat}>{title}</Link>
   </li>
   )
}
