import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-md navbar-dark sticky-top bg-glass">
            <div className="container">
                <NavLink className="navbar-brand fw-bold" to="/">NASA BIOSCIENCE</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item"><NavLink to="/" className="nav-link">HOME</NavLink></li>
                        <li className="nav-item"><NavLink to="/visualize" className="nav-link">VISUALIZE</NavLink></li>
                        <li className="nav-item"><NavLink to="/dashboard" className="nav-link">DASHBOARD</NavLink></li>
                        <li className="nav-item"><NavLink to="/resource" className="nav-link">RESOURCES</NavLink></li>
                        <li className="nav-item"><NavLink to="/about" className="nav-link">ABOUT</NavLink></li>
                        <li className="nav-item"><NavLink to="/login" className="nav-link">LOGIN</NavLink></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
