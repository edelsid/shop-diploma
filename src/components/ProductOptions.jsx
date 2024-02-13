import { Paragraph } from "../models/Paragraph"
import { SizeItem } from "../components/items/SizeItem"
import { useState } from "react"


export function ProductOptions({ sizes, submitOrder }) {
   const [number, setNumber] = useState(1);
   const [size, setSize] = useState();

   const callback = (e) => {
      if (size === e.target.value) {
         setSize();
         return;
      }
      setSize(e.target.value);
   }

   const add = () => {
      if (number < 10) {
         setNumber(number+1);
      }
   }

   const remove = () => {
      if (number > 1) {
         setNumber(number-1);
      }
   }

   const passData = (e) => {
      e.preventDefault;
      submitOrder(size, number);
   }

   return (
      <>
      <div className="text-center">
         <Paragraph title={'Размеры в наличии'}>
            {sizes.map((item) => <SizeItem 
            key={item.size} 
            item={item} 
            callback={callback} 
            active={size}>
         </SizeItem>)}
         </Paragraph>
         <Paragraph title={'Количество'}>
            <span className="btn-group btn-group-sm pl-2">
               <button className="btn btn-secondary" onClick={remove} disabled={size ? false : true}>-</button>
               <span className="btn btn-outline-primary">{number}</span>
               <button className="btn btn-secondary" onClick={add} disabled={size ? false : true}>+</button>
            </span>
         </Paragraph>
      </div>
      <button
         disabled={size ? false : true}
         className="btn btn-danger btn-block btn-lg"
         onClick={passData}>В корзину
      </button>
      </>
   )
}
