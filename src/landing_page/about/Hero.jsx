import React from 'react';
import { Link } from 'react-router-dom';

function Hero() {
    return ( 
        <div className="container">
            <div className="about-hero-heading">
                <h2>We pioneered the discount broking model in India.</h2>
                <h2>Now, we are breaking ground with our technology.</h2>
            </div>
            <div className="row about-hero-content">
                <div className="col-6">
                    <p>We kick-started operations on the 15th of August, 2010 with the goal of breaking all barriers that traders and investors face in India in terms of cost, support, and technology. We named the company TradeX, a combination of Trade and "X".</p>
                    <p>Today, our disruptive pricing models and in-house technology have made us the biggest stock broker in India.</p>
                    <p>Over 1.6+ crore clients place billions of orders every year through our powerful ecosystem of investment platforms, contributing over 15% of all Indian retail trading volumes.</p>
                </div>
                <div className="col-6">
                    <p>In addition, we run a number of popular open online educational and community initiatives to empower retail traders and investors.</p>
                    <p><Link to='/coming-soon'>Rainmatter</Link>, our fintech fund and incubator, has invested in several fintech startups with the goal of growing the Indian capital markets.</p>
                    <p>And yet, we are always up to something new every day. Catch up on the latest updates on our <Link to='/coming-soon'>blog</Link> or see what the media is <Link to='/coming-soon'>saying about us</Link> or learn more about our business and product <Link to='/coming-soon'>philosophies.</Link></p>
                </div>
            </div>
        </div>
    );
}
export default Hero;