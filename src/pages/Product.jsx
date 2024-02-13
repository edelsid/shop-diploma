import { Banner } from "../components/Banner"
import { LoadingScreen } from "../components/LoadingScreen"
import { Table } from "../components/Table"
import { ProductOptions } from "../components/ProductOptions"
import { useLocation, useNavigate } from "react-router-dom"
import { useFetch } from "../hooks/useFetch"
import { useDispatch } from "react-redux"
import { addAction } from "../store/cart"


export function Product() {
  const location = useLocation();
  const id = location.state;
  const product = useFetch(`${import.meta.env.VITE_API_URL}/items/${id}`);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const submitOrder = (size, number) => {
    const order = {
      id,
      title: product.data.title,
      price: product.data.price,
      count: number,
      size: size,
    };
    dispatch(addAction({order}));
    navigate ("/cart");
  }

  if (product.data) {
    const { images, title, sizes } = product.data;
    return (
      <>
      <Banner></Banner>
      <section className="catalog-item">
        <h2 className="text-center">{title}</h2>
        <div className="row">
          <div className="col-5">
            <img src={images[0]} className="img-fluid" alt={title}></img>
          </div>
          <div className="col-7">
            <Table item={product.data}></Table>
            <ProductOptions submitOrder={submitOrder} sizes={sizes}></ProductOptions>
          </div>
        </div>
      </section>
      </>
    )
  } return (
    <>
      <Banner></Banner>
      {product.error ? <p className="text-center">Упс! Что-то пошло не так.<br />Приносим извинения!</p> : <></>}
      <LoadingScreen></LoadingScreen>
    </>
  )
}