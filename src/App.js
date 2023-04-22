import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {useState} from 'react'
import CartProvider from './context/CartProvider'
import './vars.css';
import Cart from './components/cart/Cart'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Headphones from './pages/Headphones'
import Mark2 from './pages/Mark2'
import Mark1 from './pages/Mark1'
import Xx59 from './pages/Xx59'
import Speakers from './pages/Speakers'
import Zx9 from './pages/Zx9'
import Zx7 from './pages/Zx7'
import Earphones from './pages/Earphones'
import Yx1 from './pages/Yx1';
   

function App() {
  const [showCart, setShowCart] = useState(true)

  const hideCartHandler = () => {
    setShowCart(false)
  }

  const showCartHandler = () => {
    setShowCart(true)
  }

  return (
    <CartProvider>
        {showCart && <Cart hide={hideCartHandler}/>}
      <Router>
        <Navbar show={showCartHandler}/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/headphones' element={<Headphones />} />
          <Route path='/headphones/markII' element={<Mark2 />} />
          <Route path='/headphones/markI' element={<Mark1 />} />
          <Route path='/headphones/xx59' element={<Xx59 />} />
          <Route path='/speakers' element={<Speakers />} />
          <Route path='/speakers/zx9' element={<Zx9 />} />
          <Route path='/speakers/zx7' element={<Zx7 />} />
          <Route path='/earphones' element={<Earphones />} />
          <Route path='/earphones/yx1' element={<Yx1 />} />
        </Routes>
        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;
