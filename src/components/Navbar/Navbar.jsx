import React, { useState } from 'react'
import pic from "../../assets/admin_assets/logo2.png";
import pic2 from "../../assets/frontend_assets/search_icon.png";
import pic3 from "../../assets/frontend_assets/basket_icon.png";
import {Link} from 'react-router-dom'
import "./Navbar.css"
const Navbar = ({setShowLogin}) => {
    const [menu,setMenu]=useState("home");
  return (
    <div className='navbar'>
       <Link to='/'><img src={pic} alt="" className='logo'/></Link>
       <ul className="navbar-menu">
         <Link to='/' onClick={()=>setMenu("home")} className={menu==='home'?"active":""}>home</Link>
         <a href='#explore-menu' onClick={()=>setMenu("menu")} className={menu==='menu'?"active":""}>menu</a>
         <a href='#app-download' onClick={()=>setMenu("mobile-app")} className={menu==='mobile-app'?"active":""}>mobile-app</a>
         <a href='#footer' onClick={()=>setMenu("contact-us")} className={menu==='contact-us'?"active":""}>contact us</a>
       </ul>
       <div className="navbar-right">
          <img src={pic2} alt=""/>
          <div className="navbar-search-icon">
            <Link to='/cart'><img src={pic3} alt=""/></Link>
            <div className="dot"></div>
          </div>
          <button onClick={()=>setShowLogin(true)}>sign in</button>
       </div>
    </div>
  )
}

export default Navbar
