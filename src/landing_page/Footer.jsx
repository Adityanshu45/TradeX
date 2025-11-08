import React from 'react';
import {Link} from 'react-router-dom';

function Footer() {
    return (
    <footer>   
        <div className=" border-top " style={{backgroundColor :"#fbfbfb"}}>
            <div className="container mt-4">
            <div className='row'>
                <div className="col-3 footer-icons" >
                    <img className='logo' src="media/images/logo.svg" alt="" style={{width:"130px"}} />
                    <p className='mb-0'>&#169; 2010 - 2025, TradeX Broking Ltd.</p>
                    <p>All rights reserved.</p>
                    <ul>
                        <li><Link to="/coming-soon"><i className="fa-brands fa-x-twitter"></i></Link></li>
                        <li><Link to="/coming-soon"><i className="fa-brands fa-square-facebook"></i></Link></li>
                        <li><Link to="/coming-soon"><i className="fa-brands fa-square-instagram"></i></Link></li>
                        <li><Link to="/coming-soon"><i className="fa-brands fa-linkedin"></i></Link></li>
                    </ul>
                    <hr />
                    <ul>
                        <li><Link to="/coming-soon"><i className="fa-brands fa-square-youtube"></i></Link></li>
                        <li><Link to="/coming-soon"><i className="fa-brands fa-square-whatsapp"></i></Link></li>
                        <li><Link to="/coming-soon"><i className="fa-brands fa-telegram"></i></Link></li>
                    </ul>
                </div>
                <div className="col footer-links" >
                    <h1>Account</h1>
                    <Link to="/coming-soon">Open demat account</Link><br />
                    <Link to="/coming-soon">Minor demat account</Link><br />
                    <Link to="/coming-soon">NRI demat account</Link><br />
                    <Link to="/coming-soon">Commodity</Link><br />
                    <Link to="/coming-soon">Dematerialise</Link><br />
                    <Link to="/coming-soon">Fund transfer</Link><br />
                    <Link to="/coming-soon">MFT</Link><br />
                    <Link to="/coming-soon">Referral program</Link><br />
                </div>
                <div className="col footer-links" >
                    <h1>Support</h1>
                    <Link to="/coming-soon">Contact us</Link><br />
                    <Link to="/coming-soon">Support portal</Link><br />
                    <Link to="/coming-soon">How to file a complaints</Link><br />
                    <Link to="/coming-soon">Status of your Complaints</Link><br />
                    <Link to="/coming-soon">Bulletin</Link><br />
                    <Link to="/coming-soon">Circular</Link><br />
                    <Link to="/coming-soon">Z-Connect blog</Link><br />
                    <Link to="/coming-soon">Downloads</Link><br />
                </div>
                <div className="col footer-links">
                    <h1>Company</h1>
                    <Link to="/coming-soon">About</Link><br />
                    <Link to="/coming-soon">Philosophy</Link><br />
                    <Link to="/coming-soon">Press & media</Link><br />
                    <Link to="/coming-soon">Careers</Link><br />
                    <Link to="/coming-soon">TradeX Cares (CSR)</Link><br />
                    <Link to="/coming-soon">TradeX.tech</Link><br />
                    <Link to="/coming-soon">Open source</Link><br />
                </div>
                <div className="col footer-links">
                    <h1>Quick links</h1>
                    <Link to="/coming-soon">Upcoming IPOs</Link><br />
                    <Link to="/coming-soon">Brokerage charges</Link><br />
                    <Link to="/coming-soon">Market holidays</Link><br />
                    <Link to="/coming-soon">Status of your Complaints</Link><br />
                    <Link to="/coming-soon">Economic calendar</Link><br />
                    <Link to="/coming-soon">Market</Link><br />
                    <Link to="/coming-soon">Sectors</Link><br />
                </div>
            </div>
            <div className='footer-content'>
                <p>TradeX Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ0000333 CDSL/NSDL: Depository services through TradeX Broking Ltd. – SEBI Registration no.: IN-DP-432-2019 Commodity Trading through TradeX Commodities Pvt. Ltd. MCX: 460255; SEBI Registration no.: INZ00005238238 Registered Address: TradeX Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to <Link to="/coming-soon"></Link>, for DP related to <Link to="/coming-soon">dp@tradeX.com</Link>. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF</p>
                <p>Procedure to file a complaint on <Link to="/coming-soon">SEBI SCORES</Link>: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances</p>
                <p><Link to="/coming-soon">Smart Online Dispute Resolution</Link> | <Link to="/coming-soon">Grievances Redressal Mechanism</Link></p>
                <p>Investments in securities market are subject to market risks; read all the related documents carefully before investing.</p>
                <p>Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.</p>
                <p>India's largest broker based on networth as per NSE. <Link to="/coming-soon"></Link>NSE broker factsheet</p>
                <p>"Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of TradeX and offering such services, please <Link to="/coming-soon">create a ticket here.</Link></p>
            </div>
            <div className="footer-bottom-links">
                <Link to="/coming-soon">NSE</Link>
                <Link to="/coming-soon">BSE</Link>
                <Link to="/coming-soon">MCX</Link>
                <Link to="/coming-soon">Terms & condition</Link>
                <Link to="/coming-soon">Policies & procedures</Link>
                <Link to="/coming-soon">Privacy policy</Link>
                <Link to="/coming-soon">Disclouser</Link>
                <Link to="/coming-soon">For investor's attention</Link>
                <Link to="/coming-soon">Investor charter</Link>
            </div>
            </div>
        </div>
    </footer> 
    );
}

export default Footer;