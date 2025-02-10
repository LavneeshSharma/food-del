import React from 'react'
import "./Footer.css"
import {twitter_icon,logo,facebook_icon,linkedin_icon} from "../../../assets/frontend_assets/assets.js";

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img src={logo} alt=""/>
            <p>We are dedicated to providing the best services and solutions to our clients. Our mission is to deliver excellence and foster innovation.</p>
            <div className="footer-social-icons">
                <img src={facebook_icon} alt=''/>
                <img src={twitter_icon} alt=''/>
                <img src={linkedin_icon} alt=''/>
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
                <li>contact@flavorhaven.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024 © FlavorHaven.com -All Right Reserved
      </p>
    </div>
  )
}

export default Footer
