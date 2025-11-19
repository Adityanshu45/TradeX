import React from 'react';
import { Link } from 'react-router-dom';

function Hero() {
    return (
        <div className="container">
            <div className="products-hero border-bottom">
                <h1>TradeX Products</h1>
                <h2>Sleek, modern, and intuitive trading platforms</h2>
                <p>Check out our <Link to='/coming-soon'>investment offerings <i className="fa-solid fa-arrow-right"></i></Link></p>
            </div>
        </div>
    );
}

export default Hero;