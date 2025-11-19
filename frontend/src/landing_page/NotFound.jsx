import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
    return (
        <div className="container p-5 mt-5">
            <div className="row text-center">
                <h1 className="mb-3">404 – Page Not Found</h1>
                <p className="mb-4">The page you’re looking for doesn’t exist or has been moved.</p>
                <Link to="/" className='p-2 Hero-button btn btn-primary fs-5 mb-5'><i class="fa-solid fa-arrow-left"></i> Go Back Home</Link>
            </div>
        </div>
    );
}

export default NotFound;