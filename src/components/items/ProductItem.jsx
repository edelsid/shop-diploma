import { useNavigate } from "react-router-dom";

export function ProductItem({ item }) {
   const { images, title, price, id } = item;
   const navigate = useNavigate();

   const toProduct = (e) => {
      e.preventDefault();
      navigate (`/catalog/${id}`, {state: id});
   };

   return (
   <div className="col-4">
      <div className="card">
         <div className="img-wrapper">
            <img src={images[0]} className="card-img-top img-fluid" alt={title}></img>
         </div>
         <div className="card-body">
            <p className="card-text title">{title}</p>
            <p className="card-text">{price} руб.</p>
            <button onClick={toProduct} className="btn btn-outline-primary">Заказать</button>
         </div>
      </div>
   </div>
   )
}
