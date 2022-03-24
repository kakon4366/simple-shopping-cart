import React from 'react';
import './Footer.css';

const Footer = () => {

    const year = new Date();
    

    return (
        <div className='footer'>
            <p>&copy; Copyright by ema-john-{year.getFullYear()}</p>
        </div>
    );
};

export default Footer;