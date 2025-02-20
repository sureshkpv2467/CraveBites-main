import React from 'react';
import { assets } from '../../assets/assets';
import './Footer.css';

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer" id="footer">
            <div className="footer-content">
                <div className="footer-content-left">
         <img src={assets.logo} alt="" />
         <p>CraveBites is your go-to online food delivery service, bringing a world of flavors right to your door. From savory bites to sweet indulgences, we’re here to satisfy every craving with fresh, quality dishes prepared just for you. Order today and experience the convenience and taste that only CraveBites can deliver!</p>
             <div className="footer-social-icon">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
                </div>  
               
                </div>
                <div className="footer-content-right">
               <h2>COMPANY</h2>
               <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
               </ul>
                </div>
                <div className="footer-content-center">
<h2>GET IN TOUCH</h2>
<ul>
    <li>+91-8074930145</li>
    <li>contact@CraveBites.com</li>
</ul>
                </div>
            </div>
            <hr />
            <p className="footer-copyright">Copyright 2024 © CraveBites.com-All Right Reserved </p>
        </div>
    </div>
  )
}

export default Footer