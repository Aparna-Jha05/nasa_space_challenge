import React from 'react'; 
import { Link } from 'react-router-dom';
import './home.css';
import Navbar from './Navbar';

const HomePage = () => {
    // Data for the roles section for easier mapping
    const roles = [
        {
            icon: (
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
            ),
            title: 'Scientist',
            description: 'Access comprehensive datasets, visualization tools, and research assistance for your space biology projects.',
            link: 'Explore Tools',
        },
        {
            icon: (
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 14l9-5-9-5-9 5 9 5z"></path><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-5.998 12.078 12.078 0 01.665-6.479L12 14z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0v6"></path></svg>
            ),
            title: 'Student',
            description: 'Learn about space biology through interactive visualizations and educational resources developed by NASA experts.',
            link: 'Start Learning',
        },
        {
            icon: (
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
            ),
            title: 'Professional',
            description: 'Leverage NASA\'s space biology research for applications in healthcare, biotechnology, and related industries.',
            link: 'View Applications',
        },
    ];

    // Scroll handler for the button
    const scrollToRoles = () => {
        const element = document.getElementById('roles-section');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <Navbar />
            <div className="home-page-container">
                <header className="hero-section">
                    <h1>Welcome to the Knowledge Engine</h1>
                    <p>Our platform connects you with cutting-edge insights and data for space biology.</p>
                    <button className="btn-get-started" onClick={scrollToRoles}>
                        Get Started
                    </button>
                </header>

                <section id="roles-section" className="roles-section">
                    <h2>Designed For Your Needs</h2>
                    <div className="roles-container">
                        {roles.map((role, index) => (
                            <div className="role-card" key={index}>
                                <div className="role-icon">{role.icon}</div>
                                <h3>{role.title}</h3>
                                <p>{role.description}</p>
                                <a href="#" className="btn-role">{role.link}</a>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </>
    );
};

export { HomePage };
