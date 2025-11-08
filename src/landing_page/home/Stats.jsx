import React from 'react';
import { Link } from 'react-router-dom';

function Stats() {
    return ( 
        <div className='container mt-5 mb-5'>
            <div className="row">
                <div className="col-6 mt-5 mb-5">
                    <h1 className='mb-5 fs-2'>Trust with confidence</h1>
                    <h2 className='fs-4'>Customer-first always</h2>
                    <p className='mb-3 text-muted'>That's why 1.3+ crore customers trust TreadX with ₹3.5+ lakh crores worth of equity investments.</p>
                    <h2 className='fs-4'>No spam or gimmicks</h2>
                    <p className='mb-3 text-muted'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>
                    <h2 className='fs-4'>The TreadX universe</h2>
                    <p className='mb-3 text-muted'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                    <h2 className='fs-4'>Do better with money</h2>
                    <p className='mb-3 text-muted'>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
                </div>
                <div className="col-6 p-5 mb-5">
                    <img className="ps-5" src="media/images/ecosystem.png" alt="ecosystem image" style={{width :"95%"}}/>
                    <div className='text-center'>
                        <Link to="/coming-soon" className='mx-5' style={{textDecoration :"none"}} >Explore our products<i class="fa-solid fa-arrow-right"></i></Link>
                        <Link to ="/coming-soon" style={{textDecoration :"none"}}  href="" >Try Kite demo <i class="fa-solid fa-arrow-right"></i></Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Stats;