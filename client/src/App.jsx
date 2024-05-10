import Header from './Components/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Cart from './Pages/Cart/Cart';
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder';
import Footer from './Components/Footer';
import { useState } from 'react';
import Login from './Components/Login';

const App = () => {
  const [showLogin, setShowLogin] = useState(false)
  return (
    <>
    {showLogin?<Login setShowLogin={setShowLogin}/>:<></>}
      <Header setShowLogin={setShowLogin}/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/order' element={<PlaceOrder/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
