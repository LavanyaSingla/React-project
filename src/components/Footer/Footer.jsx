import React from 'react'
import './Footer.css';
const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-top">
                <div className="footer-top-left">
                    <img src="" alt="" />
                    <p> I am a full-stck developer</p>
                </div>
                <div className="footer-top-right">
                    <div className="footer-email-input">
                        <img src="" alt="" />
                        <inpu type="email" placeholder='Enter your email' />
                    </div>
                    <div className="footer-subscribe">Sunscribe</div>
                </div>
            </div>
            <hr />
            <div className="footer-bottom">
                <p className='footer=bootom-left'>@2024 Lavanya Singla. All rights reserved</p>
                <div className="footer-botoom-right">
                    <p>Term of Services</p>
                    <p>Privacy Policy</p>
                    <p>Connect with me</p>
                </div>
            </div>
        </div>
    )
}

export default Footer