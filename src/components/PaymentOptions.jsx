import { DivList } from "../models/DivList"
import { PayItem } from "./items/PayItem"
import { useSelector } from "react-redux"

export function PaymentOptions() {
   const paySystems = useSelector(state => state.root.site.paymentMethods);

   return (
      <div className="col">
         <section>
            <h5>Принимаем к оплате:</h5>
            <DivList className={"footer-pay"}>
               {paySystems.map((item) => <PayItem key={item} system={item}></PayItem>)}
            </DivList>
         </section>
         <section>
            <div className="footer-copyright">2009-2019 © BosaNoga.ru — модный интернет-магазин обуви и аксессуаров.
               Все права защищены.<br />Доставка по всей России!
            </div>
         </section>
      </div>
   )   
}
