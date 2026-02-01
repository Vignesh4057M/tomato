import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-left">
                <img src={assets.logo} alt="" height={100} width={150} className='image-logo' />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quam, voluptatum expedita necessitatibus quod quibusdam accusamus nemo, sequi dolores, atque velit voluptatem. Aliquid error eos voluptates delectus! Saepe, aspernatur libero.</p>
                <div className="footer-social-icon">
                    <img src={assets.facebook} alt="" height={50} width={50} />
                    <img src={assets.twitter} alt="" height={50} width={50}/>
                    <img src={assets.linkedin} alt="" height={50} width={50}/>
                </div>
            </div>        
            <div className="footer-center">
                <h2>Company</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy </li>
                </ul>

            </div>
            <div className="footer-right">
                <h2>Get in Touch</h2>
                <ul>
                    <li>+91 7397000708</li>
                    <li>Contact@tomato.com</li>
                </ul>

            </div>
        </div>     
        <hr />
        <p className='footer-copyright'> Copyright 2025 © 2025 Food App. All Rights Reserved.</p>
    </div>
  )
}

export default Footer
