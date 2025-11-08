import React from 'react';
import { useNavigate } from 'react-router-dom';

function Hero() {
    const navigate = useNavigate(); // initialize navigation
    const handleButton=()=>{
        navigate("/coming-soon")
    }

    return (
        <div className="div support-hero-box">
        <div className="container support-hero">
            <div className="support-hero-content">
                <h1>Support Portal</h1>
                <button onClick={handleButton} className='btn btn-primary'>My ticket</button>
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