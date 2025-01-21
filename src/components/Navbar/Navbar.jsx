import React, { useState } from 'react'
import pic from "../../assets/admin_assets/logo.png";
import pic2 from "../../assets/frontend_assets/search_icon.png";
import pic3 from "../../assets/frontend_assets/basket_icon.png";
import "./Navbar.css"
const Navbar = () => {
    const [menu,setMenu]=useState("home");
  return (
    <div className='navbar'>
       <img src={pic} alt="" className='logo'/>
       <ul className="navbar-menu">
         <li onClick={()=>setMenu("home")} className={menu==='home'?"active":""}>home</li>
         <li onClick={()=>setMenu("menu")} className={menu==='menu'?"active":""}>menu</li>
         <li onClick={()=>setMenu("mobile-app")} className={menu==='mobile-app'?"active":""}>mobile-app</li>
         <li onClick={()=>setMenu("contact-us")} className={menu==='contact-us'?"active":""}>contact us</li>
       </ul>
       <div className="navbar-right">
          <img src={pic2} alt=""/>
          <div className="navbar-search-icon">
            <img src={pic3} alt=""/>
            <div className="dot"></div>
          </div>
          <button>sign in</button>
       </div>
    </div>
  )
}

export default Navbar
