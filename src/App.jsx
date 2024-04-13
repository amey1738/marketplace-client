import { useState } from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './screens/Home'
import Products from './screens/Products'
import { Route,Routes } from 'react-router-dom';
import ProductDetails from './components/ProductDetails'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>

      <Routes>        
          <Route path="/"  element={<Home/>} />
          <Route path="/products"  element={<Products />}/> 
          <Route path="/productDetails"  element={<ProductDetails />}/> 
      </Routes>

      <Footer/>
    </>
  )
}

export default App
