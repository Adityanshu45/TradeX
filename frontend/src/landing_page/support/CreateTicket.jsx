import React from 'react';
import { Link } from 'react-router-dom';

function CreateTicket() {
    return (
        <div className="container all-tickets">
            <h1>TO create a ticket, select a relevent topic</h1>
            <div className="row all-category-tickets">
                <div className="col-4 category-tickets">
                    <h3><i class="fa-solid fa-circle-plus"></i> Account Opening</h3>
                    <ul>
                        <li><Link to="/coming-soon">Online Account Opening</Link></li>
                        <li><Link to="/coming-soon">Offline Account Opening</Link></li>
                        <li><Link to="/coming-soon">Company, Partnership and HUF Account Opening</Link></li>
                        <li><Link to="/coming-soon">NRI Account Opening</Link></li>
                        <li><Link to="/coming-soon">Charges at TradeX</Link></li>
                        <li><Link to="/coming-soon">TradeX IDFC FIRST Bank 3-in-1 Account</Link></li>
                        <li><Link to="/coming-soon">Getting Started</Link></li>
                    </ul>
                </div>
                <div className="col-4 category-tickets">
                    <h3><i class="fa-solid fa-user"></i> Your TeadeX Account</h3>
                    <ul>
                        <li><Link to="/coming-soon">Login Credentials</Link></li>
                        <li><Link to="/coming-soon">Account Modification and Segment Addition</Link></li>
                        <li><Link to="/coming-soon">DP ID and bank details</Link></li>
                        <li><Link to="/coming-soon">Your Profile</Link></li>
                        <li><Link to="/coming-soon">Transfer and conversion of shares</Link></li>
                    </ul>
                </div>
                <div className="col-4 category-tickets">
                    <h3><i class="far fa-chart-bar"></i> Kite</h3>
                    <ul>
                        <li><Link to="/coming-soon">Margin/leverage, Product and Order types.</Link></li>
                        <li><Link to="/coming-soon">Kite Web and Mobile</Link></li>
                        <li><Link to="/coming-soon">Trading FAQs</Link></li>
                        <li><Link to="/coming-soon">Corporate Actions</Link></li>
                        <li><Link to="/coming-soon">Kite API</Link></li>
                        <li><Link to="/coming-soon">Sentinel</Link></li>
                        <li><Link to="/coming-soon">Pi and other platforms</Link></li>
                        <li><Link to="/coming-soon">Stockreports+</Link></li>
                        <li><Link to="/coming-soon">GTT</Link></li>
                    </ul>
                </div>
            </div>
            <div className="row">
                <div className="col-4 category-tickets">
                    <h3><i class="fa-solid fa-credit-card"></i> Funds</h3>
                    <ul>
                        <li><Link to="/coming-soon">Adding Funds</Link></li>
                        <li><Link to="/coming-soon">Fund Withdrawal</Link></li>
                        <li><Link to="/coming-soon">eMandates</Link></li>
                        <li><Link to="/coming-soon">Adding Bank Accounts</Link></li>
                    </ul>
                </div>
                <div className="col-4 category-tickets">
                    <h3><i class="fa-solid fa-circle-notch"></i> Console</h3>
                    <ul>
                        <li><Link to="/coming-soon">Report</Link></li>
                        <li><Link to="/coming-soon">Ledger</Link></li>
                        <li><Link to="/coming-soon">Portfolio</Link></li>
                        <li><Link to="/coming-soon">60 Days Challange</Link></li>
                        <li><Link to="/coming-soon">IPO</Link></li>
                        <li><Link to="/coming-soon">Refferal Program</Link></li>                        
                    </ul>
                </div>
                <div className="col-4 category-tickets">
                    <h3><i class="fa-regular fa-circle"></i> Coin</h3>
                    <ul>
                        <li><Link to="/coming-soon">Mutual Funds</Link></li>
                        <li><Link to="/coming-soon">National Pension Schema (NPS)</Link></li>
                        <li><Link to="/coming-soon">Fix Deposit (FD)</Link></li>
                        <li><Link to="/coming-soon">Features On Coin</Link></li>
                        <li><Link to="/coming-soon">Payments And Order</Link></li>
                        <li><Link to="/coming-soon">Genral</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default CreateTicket;