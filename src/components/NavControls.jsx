import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { newSearch } from "../store/site";
import { useState } from "react";

export function NavControls() {
   const purchaseCount = useSelector(state => state.root.cart.purchases.length);
   const dispatch = useDispatch();
   const [searchState, setState] = useState(false);
   const [data, setData] = useState('');
   const navigate = useNavigate();

   const inputChange = (e) => {
      setData(e.target.value);
   };

   const expand = (e) => {
      e.preventDefault();
      if (data) {
         dispatch(newSearch(data));
         navigate ('/catalog');
         setData('');
         setState(!searchState);
      } else {
         setState(!searchState);
      }
   };

   return (
   <>
      <div className="header-controls-pics">
      <div data-id="search-expander" className="header-controls-pic header-controls-search" onClick={expand}></div>
         <Link to="/cart" className="header-controls-pic header-controls-cart">
            {purchaseCount > 0 && <div className="header-controls-cart-full">{purchaseCount}</div>}
            <div className="header-controls-cart-menu"></div>
         </Link>
      </div>
      <form 
         data-id="search-form" 
         className={`header-controls-search-form form-inline ${searchState ? '' : 'invisible'}`}
         onSubmit={expand}>
         <input 
            className="form-control" 
            placeholder="Поиск" 
            onChange={inputChange}
            value={data}>
         </input>
      </form>
   </>
   )
}
