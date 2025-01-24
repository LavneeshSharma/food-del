import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home.jsx'
import Cart from './pages/Home/Cart/Cart.jsx'
import Placeorder from './pages/Home/Placeorder/Placeorder.jsx'
import Footer from './components/Navbar/Footer/Footer.jsx'
const App = () => {
  return (<>
    <div className= 'app'>
       <Navbar/>
       <Routes>
         <Route path='/' element={<Home/>} /> 
         <Route path='/cart' element={<Cart/>} />
         <Route path='/order' element={<Placeorder/>} />
       </Routes>
    </div>
    <Footer/>
    </>
  )
}

export default App
