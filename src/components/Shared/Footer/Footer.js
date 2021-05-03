import React from 'react';
import './Footer.css';

const Footer = () => {
    
    return (
        <div className="footer-container">
            <div className="copyRight text-center">
                <p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
            </div>
        </div>
    );
};

export default Footer;