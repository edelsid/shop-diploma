import { List } from "../../models/List"
import { NavItem } from "../items/NavItem"
import { NavControls } from "../NavControls";
import { Link } from "react-router-dom";
import logo from "../../img/header-logo.png"
import { useSelector } from "react-redux";

export function Header() {
   const menu = useSelector(state => state.root.site.navigation);

   return (
   <header className="container bg-light">
      <div className="row">
         <div className="col">
            <nav className="navbar navbar-expand-sm navbar-light">
               <Link className="navbar-brand" to="/">
                  <img src={logo} alt="Bosa Noga"></img>
               </Link>
               <div className="collapase navbar-collapse" id="navbarMain">
                  <List className="navbar-nav mr-auto">
                     {menu.map((item) => <NavItem key={item.id} item={item}></NavItem>)}
                  </List>
                  <NavControls></NavControls>
               </div>
            </nav>
         </div>
      </div>
   </header>
   )
}