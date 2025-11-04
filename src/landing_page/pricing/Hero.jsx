import React from 'react';

function Hero() {
    return (
        <div className="container">
            <div className="pricing-hero-title">
                <h2>Pricing</h2>
                <p>Free equity investement and flat &#8377;20 traday and f&Q trades </p>
            </div>
            <div className="row pricing-hero-badges">
                <div className="col-4 badges">
                    <img src="media/images/pricingEquity.svg" alt="zero price image" />
                    <h2>Free equity delivery</h2>
                    <p>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div className="col-4 badges">
                    <img src="media/images/intradayTrades.svg" alt="Intraday treads image" />
                    <h2>Intraday and F&O trades</h2>
                    <p>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>
                <div className="col-4 badges">
                    <img src="media/images/pricingMF.svg" alt="zero price image" />
                    <h2>Free direct MF</h2>
                    <p>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>
            </div>
        </div>
    );
}

export default Hero;