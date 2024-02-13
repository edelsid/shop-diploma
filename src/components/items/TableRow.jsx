import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeAction } from "../../store/cart";

export function TableRow({ item, rowNum }) {
   const { id, title, size, count, price } = item;
   const navigate = useNavigate();
   const dispatch = useDispatch();

   const toProduct = (e) => {
      e.preventDefault();
      navigate (`/catalog/${id}`, {state: id});
   };

   const del = (e) => {
      e.preventDefault();
      const order = item;
      dispatch(removeAction({order}));
   }

   return (
      <tr>
         <td scope="row">{rowNum}</td>
         <td><a onClick={toProduct}>{title}</a></td>
         <td>{size}</td>
         <td>{count}</td>
         <td>{price}</td>
         <td>{price * count}</td>
         <td><button className="btn btn-outline-danger btn-sm" onClick={del}>Удалить</button></td>
      </tr>
   )
}
