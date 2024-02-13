import site from "./site";
import cart from "./cart";
import { combineReducers } from "redux";

const root = combineReducers({
   site,
   cart,
});

export default root;
