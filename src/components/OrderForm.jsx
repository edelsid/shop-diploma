import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

export function OrderForm({ callback }) {
   const purchases = useSelector(state => state.root.cart.purchases);
   const [valid, setValid] = useState(false);
   const [check, setCheck] = useState(false);
   const [data, setData] = useState({
      phone: '',
      adress: '',
   });

   const {phone, adress} = data;

   const submitChange = (e) => {
      e.preventDefault();
      callback(data);
   }

   const inputChange = (e) => {
      const {id, value} = e.target;
      setData ((prevForm) => ({
         ...prevForm,
         phone: id === 'phone' ? value : prevForm.phone,
         adress: id === 'adress' ? value : prevForm.adress,
      }));
   };

   const agreement = () => {
      setCheck(!check);
   };

   useEffect(() => {
      if (data.phone.length > 0 && data.adress.length > 0) {
         setValid(true);
      } else setValid (false);
   }, [data]);

   return (
      <section className="order">
         <h2 className="text-center">Оформить заказ</h2>
         <div className="card" style={{maxWidth: "30rem", margin: "0 auto"}}>
            <form className="card-body" onSubmit={submitChange}>
               <div className="form-group">
                  <label htmlFor="phone">Телефон</label>
                  <input 
                     className="form-control" 
                     id="phone" 
                     placeholder="Ваш телефон" 
                     onChange={inputChange}
                     value={phone}>
                  </input>
               </div>
               <div className="form-group">
                  <label htmlFor="address">Адрес доставки</label>
                  <input 
                     className="form-control"
                     id="adress"
                     placeholder="Адрес доставки"
                     onChange={inputChange}
                     value={adress}>
                  </input>
               </div>
               <div className="form-group form-check">
                  <input type="checkbox" className="form-check-input" id="agreement" onChange={agreement}></input>
                  <label className="form-check-label" htmlFor="agreement">Согласен с правилами доставки</label>
               </div>
               <button 
                  type="submit" 
                  className="btn btn-outline-secondary" 
                  disabled={check && valid && purchases.length > 0 ? false : true}>Оформить
               </button>
            </form>
         </div>
      </section>
   )
}