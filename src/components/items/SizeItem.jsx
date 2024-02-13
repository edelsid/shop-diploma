export function SizeItem ({ item, callback, active }) {
   const { size, available } = item;

   if (available) return (
      <span>
         <input 
            type="radio" 
            onClick={callback} 
            onChange={callback} 
            id={size} 
            value={size} 
            checked={active === size ? true : false}>
         </input>
         <label htmlFor={size} className={`catalog-item-size ${active === size ? "selected" : ""}`}>{size}</label>
      </span>
   )
}