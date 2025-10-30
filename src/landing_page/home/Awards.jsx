import React from 'react';

function Awards() {
    return ( 
        <div className='container mt-5 mb-5'>
            <div className='row'>
                <div className='col-6 p-5'>
                    <img src="media/images/largestBroker.svg" alt="largetBroker image" />
                </div>
                <div className='col-6 p-5 mt-4 mb-5'>
                    <h1>Largest stock broker in India</h1>
                    <p>2+ million TradeX clients contribute to over 15% of all retail ordervolumes in india daily by trading and investing in:</p>
                    <div className='row mt-5'>
                        <div className='col-6'>
                            <ul>
                                <li><p>Futures and options</p></li>
                                <li><p>Commodity derivatives</p></li>
                                <li><p>Currency derivatives</p></li>
                            </ul>
                        </div>
                        <div className='col-6'>
                            <ul>
                                <li><p>Stoks & IPOs</p></li>
                                <li><p>Direct mutual funds</p></li>
                                <li><p>Bonds and Govt. Securities</p></li>
                            </ul>
                        </div>
                    </div>
                    <img className='mt-3' src="media/images/pressLogos.png" alt="pressLogos image" style={{width:"80%"}}  />
                </div>
            </div>
        </div>
    );
}

export default Awards;