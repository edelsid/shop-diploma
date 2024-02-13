import { Banner } from "../components/Banner"
import { OrderTable } from "../models/OrderTable";
import { OrderForm } from "../components/OrderForm";
import { TableRow } from "../components/items/TableRow";
import { LoadingScreen } from "../components/LoadingScreen";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearAll } from "../store/cart";

export function Cart() {
  const dispatch = useDispatch();
  const purchases = useSelector(state => state.root.cart.purchases);
  const total = useSelector(state => state.root.cart.total);
  const [pending, setPending] = useState(false);
  const [sent, setSent] = useState(false);

  const callback = (data) => {
    const items = purchases.map((item) => ({
      "id": item.id,
      "price": item.price,
      "count": item.count}));
    const finalOrder = {
      "owner": {
        "phone": data.phone,
        "address": data.adress,
      },
      items,
    }

    const postData = async () => {
      try {
        setPending(true);
        const response = await fetch(`${import.meta.env.VITE_API_URL}/order`, 
        {
          method: 'POST',
          body: JSON.stringify(finalOrder),
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (response.ok) {
          localStorage.clear();
          dispatch(clearAll());
          setPending(false);
          setSent(true);
        } else {
          console.log('not sent');
          setPending(false);
        }
      } catch (err) {
        console.log(err);
        setPending(false);
      }
    };
    postData();
  };

  return (
    <div className="row">
      <div className="col">
        <Banner></Banner>
        {sent && <section className="text-center">Ваш заказ успешно отправлен! Спасибо за покупку!</section>}
        {!pending ? 
        <>
        <OrderTable total={total}>
          {purchases.map((item) => <TableRow 
            key={purchases.indexOf(item)} 
            item={item}
            rowNum={purchases.indexOf(item) + 1}>
          </TableRow>)}
        </OrderTable>
        <OrderForm callback={callback}></OrderForm></> : 
        <LoadingScreen></LoadingScreen>}
      </div>
    </div>
  )
}
