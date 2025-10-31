import React from 'react';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg border-bottom">
            <div className="container">
                <a href="#"><img className='p-1' src="media/images/logo.svg" alt="" style={{width:"130px"}} /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active me-5" aria-current="page" href="#">Signup</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active me-5" aria-current="page" href="#">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active me-5" aria-current="page" href="#">Product</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active me-5" aria-current="page" href="#">Pricing</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Support</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;