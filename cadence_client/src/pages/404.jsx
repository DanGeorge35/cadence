import React from 'react';
import { Link } from 'react-router-dom';

const NoPage = () => {
    return (
        <div className="d-flex flex-column justify-content-center align-items-center vh-100 bg-dark text-white">
            <div className="text-center">
                <Link to="/home">
                    <img 
                        src="/logo.png" 
                        alt="Cadence Logo" 
                        style={{ height: "80px" }} 
                        className="mb-3"
                    />
                </Link>
                <h1 className="display-1 fw-bold">404</h1>
                <h3 className="mb-3">Page Not Found</h3>
                <p className="mb-4">
                    Oops! The page you are looking for does not exist or has been moved.
                </p>
                <Link to="/home" className="btn btn-warning pl-5 pr-5" style={{minWidth: "200px"}}>
                    Go Home
                </Link>
            </div>
        </div>
    );
};

export default NoPage;
