import React from 'react';

function CreateTicket() {
    return (
        <div className="container all-tickets">
            <h1>TO create a ticket, select a relevent topic</h1>
            <div className="row all-category-tickets">
                <div className="col-4 category-tickets">
                    <h3><i class="fa-solid fa-circle-plus"></i> Account Opening</h3>
                    <ul>
                        <li><a href="">Online Account Opening</a></li>
                        <li><a href="">Offline Account Opening</a></li>
                        <li><a href="">Company, Partnership and HUF Account Opening</a></li>
                        <li><a href="">NRI Account Opening</a></li>
                        <li><a href="">Charges at TradeX</a></li>
                        <li><a href="">TradeX IDFC FIRST Bank 3-in-1 Account</a></li>
                        <li><a href="">Getting Started</a></li>
                    </ul>
                </div>
                <div className="col-4 category-tickets">
                    <h3><i class="fa-solid fa-user"></i> Your TeadeX Account</h3>
                    <ul>
                        <li><a href="">Login Credentials</a></li>
                        <li><a href="">Account Modification and Segment Addition</a></li>
                        <li><a href="">DP ID and bank details</a></li>
                        <li><a href="">Your Profile</a></li>
                        <li><a href="">Transfer and conversion of shares</a></li>
                    </ul>
                </div>
                <div className="col-4 category-tickets">
                    <h3><i class="far fa-chart-bar"></i> Kite</h3>
                    <ul>
                        <li><a href="">Margin/leverage, Product and Order types.</a></li>
                        <li><a href="">Kite Web and Mobile</a></li>
                        <li><a href="">Trading FAQs</a></li>
                        <li><a href="">Corporate Actions</a></li>
                        <li><a href="">Kite API</a></li>
                        <li><a href="">Sentinel</a></li>
                        <li><a href="">Pi and other platforms</a></li>
                        <li><a href="">Stockreports+</a></li>
                        <li><a href="">GTT</a></li>
                    </ul>
                </div>
            </div>
            <div className="row">
                <div className="col-4 category-tickets">
                    <h3><i class="fa-solid fa-credit-card"></i> Funds</h3>
                    <ul>
                        <li><a href="">Adding Funds</a></li>
                        <li><a href="">Fund Withdrawal</a></li>
                        <li><a href="">eMandates</a></li>
                        <li><a href="">Adding Bank Accounts</a></li>
                    </ul>
                </div>
                <div className="col-4 category-tickets">
                    <h3><i class="fa-solid fa-circle-notch"></i> Console</h3>
                    <ul>
                        <li><a href="">Report</a></li>
                        <li><a href="">Ledger</a></li>
                        <li><a href="">Portfolio</a></li>
                        <li><a href="">60 Days Challange</a></li>
                        <li><a href="">IPO</a></li>
                        <li><a href="">Refferal Program</a></li>                        
                    </ul>
                </div>
                <div className="col-4 category-tickets">
                    <h3><i class="fa-regular fa-circle"></i> Coin</h3>
                    <ul>
                        <li><a href="">Mutual Funds</a></li>
                        <li><a href="">National Pension Schema (NPS)</a></li>
                        <li><a href="">Fix Deposit (FD)</a></li>
                        <li><a href="">Features On Coin</a></li>
                        <li><a href="">Payments And Order</a></li>
                        <li><a href="">Genral</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default CreateTicket;