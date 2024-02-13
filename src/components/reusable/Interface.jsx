import { Header } from "./Header"
import { Footer } from "./Footer"

export function Interface({ children }) {
  return (
    <>
      <Header></Header>
      <main className="container">
        {children}
      </main>
      <Footer></Footer>
    </>
  )
}
