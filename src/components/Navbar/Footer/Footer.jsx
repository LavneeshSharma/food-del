import React from 'react'
import "./Footer.css"
import { assets } from '../../../assets/frontend_assets/assets'
import pic from "../../../assets/admin_assets/logo2.png";
const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img src={pic} alt=""/>
            <p>We are dedicated to providing the best services and solutions to our clients. Our mission is to deliver excellence and foster innovation.</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt=''/>
                <img src={assets.twitter_icon} alt=''/>
                <img src={assets.linkedin_icon} alt=''/>
            </div>
        </div>
        <div className="footer-content-center">
           <h2>COMPANY</h2>
           <ul>
             <li>Home</li>
             <li>About us</li>
             <li>Delivery</li>
             <li>Privacy Policy</li>
           </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+1-212-456-7890</li>
                <li>contact@flavorheaven.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024 © FlavorHeaven.com -All Right Reserved
      </p>
    </div>
  )
}

export default Footer
