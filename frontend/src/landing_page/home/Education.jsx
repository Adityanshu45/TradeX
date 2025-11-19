import React from 'react';
import { Link } from 'react-router-dom';

function Education() {
    return ( 
        <div className="container mt-5">
            <div className="row">
                <div className="col-6 mb-5 mt-5">
                    <img src="media/images/education.svg" alt="education image" style={{width:"70%"}}/>
                </div>
                <div className="col-6 mb-5 mt-5">
                    <h1 className='mb-5 fs-2'>Free and open market education</h1>
                    <p className='mb-2 text-muted'>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                    <Link to="/coming-soon" style={{textDecoration :"none"}} >Varsity <i class="fa-solid fa-arrow-right mb-5"></i></Link>
                    <p className='mb-2 text-muted'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                    <Link to="/coming-soon" style={{textDecoration :"none"}} >TradingQ&A <i class="fa-solid fa-arrow-right mb-5"></i></Link>
                </div>
            </div>
        </div>
    );
}

export default Education;