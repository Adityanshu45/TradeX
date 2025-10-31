import React from 'react';

function Footer() {
    return (
    <footer>   
        <div className="border-top" style={{backgroundColor :"#fbfbfb"}}>
            <div className='row p-5 ms-5 me-5'>
                <div className="col-3 ms-5 footer-icons" >
                    <img className='p-1 mb-2' src="media/images/logo.svg" alt="" style={{width:"130px"}} />
                    <p className='mb-0'>&#169; 2010 - 2025, TradeX Broking Ltd.</p>
                    <p>All rights reserved.</p>
                    <ul>
                        <li><a href="#"><i class="fa-brands fa-x-twitter"></i></a></li>
                        <li><a href="#"><i class="fa-brands fa-square-facebook"></i></a></li>
                        <li><a href="#"><i class="fa-brands fa-square-instagram"></i></a></li>
                        <li><a href="#"><i class="fa-brands fa-linkedin"></i></a></li>
                    </ul>
                    <hr />
                    <ul>
                        <li><a><i class="fa-brands fa-square-youtube"></i></a></li>
                        <li><a><i class="fa-brands fa-square-whatsapp"></i></a></li>
                        <li><a><i class="fa-brands fa-telegram"></i></a></li>
                    </ul>
                </div>
                <div className="col footer-links" >
                    <h1>Account</h1>
                    <a href="#">Open demat account</a><br />
                    <a href="#">Minor demat account</a><br />
                    <a href="#">NRI demat account</a><br />
                    <a href="#">Commodity</a><br />
                    <a href="#">Dematerialise</a><br />
                    <a href="#">Fund transfer</a><br />
                    <a href="#">MFT</a><br />
                    <a href="#">Referral program</a><br />
                </div>
                <div className="col footer-links" >
                    <h1>Support</h1>
                    <a href="#">Contact us</a><br />
                    <a href="#">Support portal</a><br />
                    <a href="#">How to file a complaints</a><br />
                    <a href="#">Status of your Complaints</a><br />
                    <a href="#">Bulletin</a><br />
                    <a chref="#">Circular</a><br />
                    <a href="#">Z-Connect blog</a><br />
                    <a href="#">Downloads</a><br />
                </div>
                <div className="col footer-links">
                    <h1>Company</h1>
                    <a href="#">About</a><br />
                    <a href="#">Philosophy</a><br />
                    <a href="#">Press & media</a><br />
                    <a href="#">Careers</a><br />
                    <a href="#">TradeX Cares (CSR)</a><br />
                    <a href="#">TradeX.tech</a><br />
                    <a href="#">Open source</a><br />
                </div>
                <div className="col footer-links">
                    <h1>Quick links</h1>
                    <a href="#">Upcoming IPOs</a><br />
                    <a href="#">Brokerage charges</a><br />
                    <a href="#">Market holidays</a><br />
                    <a href="#">Status of your Complaints</a><br />
                    <a href="#">Economic calendar</a><br />
                    <a href="#">Market</a><br />
                    <a href="#">Sectors</a><br />
                </div>
            </div>
            <div className='footer-content'>
                <p>TradeX Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ0000333 CDSL/NSDL: Depository services through TradeX Broking Ltd. – SEBI Registration no.: IN-DP-432-2019 Commodity Trading through TradeX Commodities Pvt. Ltd. MCX: 460255; SEBI Registration no.: INZ00005238238 Registered Address: TradeX Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to <a href="complaints@tradeX.com"></a>, for DP related to <a href="#">dp@tradeX.com</a>. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF</p>
                <p>Procedure to file a complaint on <a href="#">SEBI SCORES</a>: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances</p>
                <p><a href="#">Smart Online Dispute Resolution</a> | <a href="#">Grievances Redressal Mechanism</a></p>
                <p>Investments in securities market are subject to market risks; read all the related documents carefully before investing.</p>
                <p>Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.</p>
                <p>India's largest broker based on networth as per NSE. <a href="#"></a>NSE broker factsheet</p>
                <p>"Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of TradeX and offering such services, please <a href="#">create a ticket here.</a></p>
            </div>
            <div className="footer-bottom-links">
                <a href="#">NSE</a>
                <a href="#">BSE</a>
                <a href="#">MCX</a>
                <a href="#">Terms & condition</a>
                <a href="#">Policies & procedures</a>
                <a href="#">Privacy policy</a>
                <a href="#">Disclouser</a>
                <a href="#">For investor's attention</a>
                <a href="#">Investor charter</a>
            </div>
        </div>
    </footer> 
    );
}

export default Footer;