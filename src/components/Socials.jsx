import { Link } from "react-router-dom"
import { Social } from "./items/Social"
import { DivList } from "../models/DivList"
import { useSelector } from "react-redux"

export function Socials() {
   const socials = useSelector(state => state.root.site.socials);

   return (
   <div className="col text-right">
      <section className="footer-contacts">
         <h5>Контакты:</h5>
         <Link className="footer-contacts-phone" to="tel:+7-495-790-35-03">+7 495 79 03 5 03</Link>
            <span className="footer-contacts-working-hours">Ежедневно: с 09-00 до 21-00</span>
         <Link className="footer-contacts-email" to="mailto:office@bosanoga.ru">office@bosanoga.ru</Link>
         <DivList className={"footer-social-links"}>
            {socials.map((item) => <Social key={item} system={item}></Social>)}
         </DivList>
      </section>
   </div>
   )
}
