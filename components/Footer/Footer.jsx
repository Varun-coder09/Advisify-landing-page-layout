'use client';
import React from 'react';
import './Footer.css';
// import Threads from '../Footer/Threads';

 
 
 
const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="footer-bg-animation">
                {/* <Threads
                    color={[0.843, 1, 0.553]}
                    amplitude={1}
                    distance={0.2}
                    enableMouseInteraction={false} /> */}
            </div>
 
            <div className="footer-content">
                <div className="footer-top">
                    <div className="footer-left">
                        <h2>Ready to Join?</h2>
                        <button className="download-btn">Download App</button>
                        <div className="address">
                            <p>24 West 40th Street, 2nd Floor</p>
                            <p>New York, NY 10018</p>
                        </div>
                        <div className="contact">
                            <h3>718-222-8822</h3>
                            <p>office@advisify.com</p>
                        </div>
                    </div>
 
                    <div className="footer-links">
                        <div>
                            <p>About</p>
                            <p>Security & Trust</p>
                        </div>
                        <div>
                            <p>Contact Us</p>
                            <p>Advisor login</p>
                        </div>
                        <div>
                            <p>Admin</p>
                            <p>Login</p>
                        </div>
                    </div>
                </div>
 
                <div className="footer-bottom">
                    <div>©2025 Advisify. All rights reserved.</div>
                    <div>Privacy Policy</div>
                    <div className="social-icons">
  <img src="/assets/linkedinsvg.svg" alt="LinkedIn" />
  <img src="/assets/insta.svg" alt="Instagram" />
  <img src="/assets/fb.svg" alt="Facebook" />
  <img src="/assets/x.svg" alt="X" />
</div>

                </div>
            </div>
        </footer>
    );
};
 
export default Footer;
 