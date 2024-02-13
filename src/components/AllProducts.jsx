import { DivList } from "../models/DivList"
import { List } from "../models/List"
import { ProductItem } from "./items/ProductItem"
import { Category } from "./items/Category"
import { LoadingScreen } from "./LoadingScreen"
import { ProductPanel } from "../models/ProductPanel"
import { SearchBar } from "./SearchBar"
import { useFetch } from "../hooks/useFetch"
import { useState, useEffect } from "react"
import { useSelector,useDispatch } from "react-redux"
import { newSearch } from "../store/site"

export function AllProducts({ inCatalogue }) {
  const rawURL = import.meta.env.VITE_API_URL;
  const dispatch = useDispatch();
  const searched = useSelector(state => state.root.site.searchQuery);
  const [adress, setAdress] = useState(searched ? `${rawURL}/items?q=${searched}` : `${rawURL}/items`);
  const categories = useFetch(`${rawURL}/categories`);
  let newData = useFetch(adress);
  const [products, setProducts] = useState();
  const [allCategories, setCategories] = useState();
  const [active, setActive] = useState(0);
  const [full, setFull] = useState(false);
  const [count, setCount] = useState(6);

  
  const callback = (id) => {
    setProducts();
    setActive(id);
    if (id === 0) {
      setAdress(`${rawURL}/items`);
    } else setAdress(`${rawURL}/items?categoryId=${id}`);
    setFull(false);
    setCount(6);
  }

  const searchCallback = (query) => {
    setProducts();
    if (active === 0) {
      setAdress(`${rawURL}/items?q=${query}`);
    } else setAdress(`${rawURL}/items?categoryId=${active}&q=${query}`);
    setCount(6);
    setFull(true);
  }

  useEffect(() => {
    if (newData.data) {
      if (searched.length > 0) dispatch(newSearch(''));
      setProducts(newData.data);
      switch (newData.data.length / 6) {
        case 1:
          break;
        default:
          setFull(true);
      }
      return (() => setProducts());
    }
  }, [newData.data]);

  useEffect(() => {
    if (categories.data && categories.data[0].id !==0) {
      categories.data.unshift({
        "id": 0,
        "title": "Все"
      });
      setCategories(categories.data);
      return (() => setCategories());
    }}, [categories.data]);

  const showMore = (e) => {
    e.preventDefault();
    setProducts();
    if (active === 0) {
      setAdress(`${rawURL}/items?offset=${count}`);
    } else setAdress(`${rawURL}/items?categoryId=${active}&offset=${count}`);
    const newCount = count + 6;
    setCount(newCount);
  };


  return (
    <ProductPanel className={"catalog"} title={"Каталог"}>
      {inCatalogue && <SearchBar searchCallback={searchCallback}></SearchBar>}
      {allCategories && products ? 
      <>
        <List className={"catalog-categories nav justify-content-center"}>
          {allCategories.map((item) => <Category key={item.id} item={item} callback={callback} active={active}></Category>)}
        </List>
        <DivList className={"row product-row"}>
          {products.map((item) => <ProductItem key={item.id} item={item}></ProductItem>)}
        </DivList>
        {products.length === 0 && full ? <p className="text-center">По вашему запросу не нашлось больше товаров.<br />Приносим извинения!</p> : <></>}
        
        {!full && <div className="text-center">
          <button className="more btn btn-outline-primary" onClick={showMore}>Загрузить ещё</button>
        </div>}
      </> : <LoadingScreen></LoadingScreen>}
      {newData.error || categories.error ? <p className="text-center">Упс! Что-то пошло не так.<br />Приносим извинения!</p> : <></>}
    </ProductPanel>
    )
}