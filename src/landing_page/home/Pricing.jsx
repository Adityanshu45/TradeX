import React from 'react';

function Pricing() {
    return ( 
        <div className="container mt-5 mb-5">
            <div className="row">
                <div className="col-4 mt-5 mb-5">
                    <h1 className='mb-5 fs-2'>Unbeatable pricing</h1>
                    <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <div><a style={{textDecoration :"none"}}  href="" >See pricing <i class="fa-solid fa-arrow-right"></i></a></div>
                </div>
                {/* empty space */}
                <div className="col-2 mt-5 mb-5"></div>

                <div className="col-6 mt-5 mb-5">
                    <div className="row">
                        <div className="col-6 text-center ps-5 pe-5 border" >
                            <h1 className='mb-3 mt-4'>&#8377;0</h1>
                            <p className='mb-4'>Free equity deleviry and direct mutual funds</p>
                        </div>
                        <div className="col-6  text-center ps-5 pe-5 border" >
                            <h1 className='mb-3 mt-4 '>&#8377;0</h1>
                            <p className='mb-4'>Intraday and F&Q</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pricing;