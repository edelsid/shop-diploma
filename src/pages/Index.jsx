import { Banner } from "../components/Banner"
import { AllProducts } from "../components/AllProducts"
import { BestProducts } from "../components/BestProducts"

export function Index() {
  return (
    <>
      <Banner></Banner>
      <BestProducts></BestProducts>
      <AllProducts></AllProducts>
    </>
  )
}
