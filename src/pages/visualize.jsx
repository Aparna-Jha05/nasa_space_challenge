import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import './visualize.css';

const Visualize = () => {
    const location = useLocation();
    const fileInputRef = useRef(null);

    const [selectedRole, setSelectedRole] = useState(location.state?.role || "");
    const [uploadedFileName, setUploadedFileName] = useState("");

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleFileClick = () => {
        if (fileInputRef.current) fileInputRef.current.click();
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setUploadedFileName(file.name);
            console.log("Uploaded file:", file);
        }
    };

    return (
        <>
            <Navbar />
            <main className="container py-5 text-light" style={{ paddingTop: '80px' }}>
                {/* Page Header */}
                <header className="text-center mb-5">
                    <h1 className="display-3 fw-bold lora-font">Dive Deeper into</h1>
                    <h1 className="display-3 fw-bold lora-font" style={{ color: '#a5b4fc' }}>Space Biology Data.</h1>
                </header>

                {/* Search + Help Box + Role Buttons */}
                <div className="row mb-4 align-items-center">
                    <div className="col-lg-1 col-2 me-2">
                        {/* Small Help Box */}
                        <div className="help-box text-center p-2" onClick={handleFileClick}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                                className="bi bi-folder-fill mb-1" viewBox="0 0 16 16">
                                <path d="M9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.826a2 2 0 0 1-1.991-1.819l-.637-7a1.99 1.99 0 0 1 .342-1.31L.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3zm-8.322.12C1.72 3.042 1.95 3 2.19 3h5.396l-.707-.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981l.006.139z" />
                            </svg>
                            <p className="small mb-0">{uploadedFileName || "Upload"}</p>
                            <input
                                type="file"
                                ref={fileInputRef}
                                onChange={handleFileChange}
                                accept=".pdf,.doc,.docx"
                                style={{ display: 'none' }}
                            />
                        </div>
                    </div>

                    <div className="col-lg-7 col-10">
                        <div className="input-group mb-2">
                            <span className="input-group-text bg-transparent border-end-0"
                                style={{ borderColor: 'rgba(50, 50, 50, 0.5)' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                    fill="currentColor" className="bi bi-search text-white-50"
                                    viewBox="0 0 16 16">
                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 
                                    3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 
                                    6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                </svg>
                            </span>
                            <input type="text"
                                className="form-control form-control-lg form-control-dark border-start-0"
                                placeholder="Ask a question about space biology..." />
                        </div>

                        {/* Role Buttons */}
                        <div className="d-flex justify-content-start mt-1">
                            {["Scientist", "Student", "Professional", "Mission Architects"].map(role => (
                                <button
                                    key={role}
                                    type="button"
                                    className={`btn btn-sm me-2 ${selectedRole === role ? 'btn-primary' : 'btn-outline-primary'}`}
                                    onClick={() => setSelectedRole(role)}
                                >
                                    {role}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export { Visualize };
