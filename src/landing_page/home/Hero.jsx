import React from 'react';

function Hero() {
    return ( 
        <div className="container p-5 mb-5">
            <div className="row text-center home-hero">
                <img src="media/images/homeHero.png" alt="home hero image" className='mb-5'/>
                <h1 className='mt-5'>Invest is erverything</h1>
                <p>Online plateform to invest in stocks, derivatives, mutual Funds, and more </p>
                <button className='p-2 Hero-button btn btn-primary fs-5 mb-5'>Sign up for free</button>
            </div>
        </div>
    );
}

export default Hero;