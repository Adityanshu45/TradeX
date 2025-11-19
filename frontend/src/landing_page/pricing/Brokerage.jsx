import React from 'react';
import { Link } from 'react-router-dom';

function Brokerage() {
    return (
        <div className="container border-top brokerage">
            <div className="row">
                <div className="col-8 brokerage-content">
                    <Link to="/coming-soon" ><h3>Brokerage calculator</h3></Link>
                    <ul>
                        <li>Call & Trade and RMS auto-squareoff: Additional charges of 250+ GST per order.</li>
                        <li>Digital contract notes will be sent via e-mail.</li>
                        <li>Physical copies of contract notes, if required, shall be charged 220 per contract note. Courier charges apply.</li>
                        <li>For NRI account (non-PIS), 0.5% or 100 per executed order for equity (whichever is lower).</li>
                        <li>For NRI account (PIS), 0.5% or 2200 per executed order for equity (whichever is lower).</li>
                        <li>If the account is in debit balance, any order placed will be charged 40 per executed order instead of 220 per executed order.</li>
                    </ul>
                </div>
                <div className="col-4 brokerage-content">
                    <Link to="/coming-soon"><h3>List of charges</h3></Link>
                </div>
            </div>
        </div>
    );
}

export default Brokerage;