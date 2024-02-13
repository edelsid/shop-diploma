import { Routes, Route } from 'react-router-dom'
import { Interface } from './components/reusable/Interface'
import { Index, Catalogue, About, Contacts, Cart, Product, NotFound } from './pages'
import './App.css'

function App() {
  return (
    <Interface>
      <Routes>
        <Route path="/" exact element={<Index/>} />
        <Route path="/catalog" exact element={<Catalogue/>} />
        <Route path="/about" exact element={<About/>} />
        <Route path="/contacts" exact element={<Contacts/>} />
        <Route path="/cart" exact element={<Cart/>} />
        <Route path="/catalog/:id" exact element={<Product/>} />
        <Route path='*' element={<NotFound />}/>
      </Routes>
    </Interface>
  )
}

export default App
