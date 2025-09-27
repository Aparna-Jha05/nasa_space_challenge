import React from 'react';
import './login.css';
import Navbar from './Navbar';

const Login = () => {
    return (
        <div className="login-page-container">
            <Navbar />
            
            <main className="main-content container-fluid">
                <div className="row justify-content-center">
                    <div className="login-form-container">
                        <div className="card card-custom p-4 p-md-5">
                            <div className="card-body">
                                <div className="text-center mb-4">
                                    <h2 className="fw-bold text-white">Secure Sign-In</h2>
                                    <p className="text-light">Access your dashboard and resources.</p>
                                </div>
                                <form>
                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label">Email address</label>
                                        <input type="email" className="form-control form-control-dark" id="email" placeholder="name@example.com" required />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="password" className="form-label">Password</label>
                                        <input type="password" className="form-control form-control-dark" id="password" placeholder="••••••••" required />
                                    </div>
                                    <div className="d-grid mb-3">
                                        <button type="submit" className="btn btn-primary btn-lg">Sign In</button>
                                    </div>
                                     <div className="text-center">
                                        <a href="#" className="text-decoration-none small" style={{color: '#a5b4fc'}}>Forgot Password?</a>
                                    </div>
                                </form>
                                 <hr className="text-secondary my-4" />
                                <div className="text-center">
                                    <p className="text-light small mb-0">Don't have an account? <a href="#" className="text-decoration-none fw-bold" style={{color: '#a5b4fc'}}>Create one</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export { Login };
