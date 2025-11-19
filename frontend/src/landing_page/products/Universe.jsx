import React from 'react';
import { Link } from 'react-router-dom';

function Universe() {
    return (
        <div className="container text-center">
            <h2 className='universe-title'>The TradeX Universe</h2>
            <p className='universe-description'>Extend your trading and investment experience even further with our partner platforms</p>
            <div className="row text-center">
                <div className="col-4 universe-logo">
                    <Link to="/coming-soon">
                        <img src="media/images/tradeXFundhouse.png" alt="TradeXfundhouseimage" />
                        <p>Our asset management venture that is creating simple and transparent index funds to help you save for your goals.</p>
                    </Link> <br />
                    <Link to="/coming-soon">
                        <img src="media/images/streakLogo.png" alt="StreakLogoimage" />
                        <p>Systematic trading platform that allows you to create and backtest strategies without coding.</p>
                    </Link>
                </div>
                <div className="col-4 universe-logo">
                    <Link to="/coming-soon">
                        <img src="media/images/sensibullLogo.svg" alt="sensibullLogo" />
                        <p>Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FII/DII, and more.</p>
                    </Link> <br />
                    <Link to="/coming-soon">
                        <img src="media/images/smallcaseLogo.png" alt="smallcaseLogoimage" />
                        <p>Thematic investing platform that helps you invest in diversified baskets of stocks on ETFs.</p>
                    </Link>
                </div>
                <div className="col-4  universe-logo">
                    <Link to="/coming-soon">
                        <img src="media/images/goldenpiLogo.png" alt="BondTradingimage" />
                        <p>GoldenPi is India’s first online platform that enables retail investors to invest easily in bonds and debentures.</p>
                    </Link> <br />
                    <Link>
                        <img src="media/images/dittoLogo.png" alt="dittoimage" />
                        <p>Personalized advice on life and health insurance. No spam and no mis-selling.</p>
                    </Link>
                </div>
            </div>
            <button className='p-2 universe-button btn btn-primary fs-5 mb-5 mt-5'>Sign up for free</button>
        </div>
    );
}

export default Universe;