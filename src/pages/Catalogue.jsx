import { Banner } from "../components/Banner"
import { AllProducts } from "../components/AllProducts"

export function Catalogue() {

  return (
    <div>
      <Banner></Banner>
      <AllProducts inCatalogue={true}></AllProducts>
    </div>
  )
}
