import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home.jsx'
import Cart from './pages/Home/Cart/Cart.jsx'
import Placeorder from './pages/Home/Placeorder/Placeorder.jsx'
import Footer from './components/Navbar/Footer/Footer.jsx'
import LoginPopup from './components/Navbar/LoginPopup/LoginPopup.jsx'
import VerifyOrder from "./pages/Home/VerifyOrder/VerifyOrder.jsx"; // Create this component
const App = () => {
  const[showLogin,setShowLogin]=useState(false);
  return (<>
    {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
    <div className= 'app'>
       <Navbar setShowLogin={setShowLogin}/>
       <Routes>
         <Route path='/' element={<Home/>} /> 
         <Route path='/cart' element={<Cart/>} />
         <Route path='/order' element={<Placeorder/>} />
         <Route path="/verify" element={<VerifyOrder />} />
       </Routes>
    </div>
    <Footer/>
    </>
  )
}

export default App
