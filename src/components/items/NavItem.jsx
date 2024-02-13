import { NavLink } from "react-router-dom";

export function NavItem({ item }) {
   const { name, link } = item;
   return (
   <li className="nav-item">
      <NavLink className="nav-link" to={link}>{name}</NavLink>
   </li>
   )
}
