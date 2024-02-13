import { NavItem } from "./items/NavItem"
import { List } from "../models/List"
import { useSelector } from "react-redux";

export function InfoSection() {
   const fullMenu = useSelector(state => state.root.site.navigation);
   const menu = fullMenu.slice(1);

   return (
   <div className="col">
      <section>
         <h5>Информация</h5>
         <List className="nav flex-column">
            {menu.map((item) => <NavItem key={item.id} item={item}></NavItem>)}
         </List>
      </section>
   </div>
   )
}
