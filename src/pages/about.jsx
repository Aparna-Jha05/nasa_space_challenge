import React from 'react';
import './about.css';
import Navbar from './Navbar';

// Import local images for team members
import suryaImage from '../photos/Surya.jpg';
import abhishekImage from '../photos/Abhishek.jpg';
import milindImage from '../photos/Milind.jpg';
import dishaImage from '../photos/Disha.jpg';
import harshImage from '../photos/Harsh.jpg';

const teamMembers = [
    {
        name: 'Surya Pratap Singh',
        role: 'Team Leader',
        imageUrl: suryaImage,
        linkedinUrl: 'https://www.linkedin.com/in/suryapratap-singh'
    },
    {
        name: 'Abhishek Yadav',
        role: 'AI/ML Engineer',
        imageUrl: abhishekImage,
        linkedinUrl: 'https://www.linkedin.com/in/abhishek-yadav'
    },
    {
        name: 'Milind Maula',
        role: 'Full Stack Developer',
        imageUrl: milindImage,
        linkedinUrl: 'https://www.linkedin.com/in/milind-maula'
    },
    {
        name: 'Disha Rai',
        role: 'UI/UX Designer',
        imageUrl: dishaImage,
        linkedinUrl: 'https://www.linkedin.com/in/disha-rai'
    },
    {
        name: 'Harsh Yadav',
        role: 'Backend Developer',
        imageUrl: harshImage,
        linkedinUrl: 'https://www.linkedin.com/in/harsh-yadav'
    }
];

const AboutPage = () => {
    return (
        <>
            <Navbar />
            
            <div className="container p-4 p-md-5">
                <div className="row">
                    <div className="col-lg-10 mx-auto">
                        <header className="mb-5 mt-4" style={{paddingTop: '60px'}}>
                            <h1 className="display-5 fw-bold text-white">About the Knowledge Engine</h1>
                            <p className="lead text-white mt-2">The Knowledge Engine transforms NASA’s space biology data into accessible insights and AI-powered visualizations. We connect data with discovery, making it easier for scientists, students, and innovators to explore how life adapts in space.</p>
                        </header>

                        <main>
                            <section className="mb-5">
                                <h2 className="h3 text-white font-serif mb-3">Our Mission</h2>
                                <ul className="lead text-white-50">
                                    <li>Simplify access to NASA’s space biology data.</li>
                                    <li>Leverage AI, ML, and smart tools for deeper insights.</li>
                                    <li>Inspire the next generation of space explorers.</li>
                                </ul>
                            </section>
                            
                            <section className="mb-5">
                                <h2 className="h3 text-white font-serif mb-4 text-center">Our Team</h2>
                                <div className="team-grid">
                                    {teamMembers.map((member, index) => (
                                        <div className="team-member-card" key={index}>
                                            <img src={member.imageUrl} alt={`Portrait of ${member.name}`} className="team-member-img" />
                                            <h5 className="text-white mt-3 mb-1">{member.name}</h5>
                                            <p className="text-white-50 mb-2">{member.role}</p>
                                            <a href={member.linkedinUrl} target="_blank" rel="noopener noreferrer" className="linkedin-link" aria-label={`${member.name}'s LinkedIn Profile`}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                                            </a>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        </main>
                    
                        <footer className="mt-5 text-center">
                            <p className="text-white-50 fst-italic">“The future of space biology begins with knowledge.”</p>
                        </footer>
                    </div>
                </div>
            </div>
        </>
    );
};

export { AboutPage };
