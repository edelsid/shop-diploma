import { InfoSection } from "../InfoSection"
import { PaymentOptions } from "../PaymentOptions"
import { Socials } from "../Socials"

export function Footer() {
  return (
    <footer className="container bg-light footer">
      <div className="row">
        <InfoSection></InfoSection>
        <PaymentOptions></PaymentOptions>
        <Socials></Socials>
      </div>
    </footer>
  )
}