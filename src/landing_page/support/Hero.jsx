import React from 'react';

function Hero() {
    return (
        <div className="div support-hero-box">
        <div className="container support-hero">
            <div className="content">
                <h1>Support Portal</h1>
                <button className='btn btn-primary'>My ticket</button>
            </div>
            <div className="input-field">
                <i class="fa-solid fa-magnifying-glass"></i>
                <input type="text" placeholder="Eg: How do I open my account, How do I activate F&O..." />
            </div>
        </div>
        </div>
    );
}

export default Hero;