import { ProductItem } from "./items/ProductItem"
import { DivList } from "../models/DivList"
import { LoadingScreen } from "./LoadingScreen"
import { ProductPanel } from "../models/ProductPanel"
import { useFetch } from "../hooks/useFetch"

export function BestProducts() {
   const newData = useFetch(`${import.meta.env.VITE_API_URL}/top-sales`);

   if (newData.data && newData.data.length === 0) {
      return <></>
   } else if (newData.data) {
      return (
         <ProductPanel className={"top-sales"} title={"Хиты продаж!"}>
            <DivList className={"row product-row"}>
               {newData.data.map((item) => <ProductItem key={item.id} item={item}></ProductItem>)}
            </DivList>
         </ProductPanel>
      )
   }

   return (
      <ProductPanel className={"top-sales"} title={"Хиты продаж!"}>
         {newData.error ? <p className="text-center">Упс! Что-то пошло не так.<br />Приносим извинения!</p> : <></>}
         <LoadingScreen></LoadingScreen>
      </ProductPanel>
   )
}
