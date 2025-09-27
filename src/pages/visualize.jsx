import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import './visualize.css';
import Navbar from './Navbar';

const Visualize = () => {
    const chartRef = useRef(null);
    const chartInstance = useRef(null);

    const researchPapers = [
        { date: "July 20, 2021", title: "Mice in Bion-M 1 space mission: training and selection" },
        { date: "December 12, 2023", title: "Microgravity induces pelvic bone loss through osteoclastic activity, osteocytic osteolysis, and osteoblastic cell cycle inhibition by CDKN1a/p21" },
        { date: "January 5, 2024", title: "Genomic and transcriptomic responses of Drosophila melanogaster to spaceflight" },
        { date: "February 18, 2024", title: "The impact of simulated microgravity on the proteome of human skin fibroblasts" },
        { date: "March 29, 2024", title: "Plant growth and development in the space environment: challenges and opportunities" }
    ];

    useEffect(() => {
        if (chartRef.current) {
            if (chartInstance.current) {
                chartInstance.current.destroy();
            }
            const ctx = chartRef.current.getContext('2d');
            chartInstance.current = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: ['Microgravity', 'Osteoclasts', 'Genomics', 'Bone Loss', 'Cells', 'Spaceflight'],
                    datasets: [{
                        label: 'Keyword Frequency',
                        data: [12, 19, 8, 15, 9, 7],
                        backgroundColor: 'rgba(165, 180, 252, 0.5)',
                        borderColor: 'rgba(165, 180, 252, 1)',
                        borderWidth: 1
                    }]
                },
                options: {
                    maintainAspectRatio: false,
                    scales: {
                        y: {
                            beginAtZero: true,
                            ticks: { color: '#9ca3af' },
                            grid: { color: 'rgba(107, 114, 128, 0.3)' }
                        },
                        x: {
                            ticks: { color: '#9ca3af' },
                            grid: { display: false }
                        }
                    },
                    plugins: {
                        legend: {
                           display: false
                        }
                    }
                }
            });
        }
        
        return () => {
            if (chartInstance.current) {
                chartInstance.current.destroy();
            }
        };
    }, []);

    return (
        <>
            <Navbar />
            <main className="container py-5 text-light" style={{paddingTop: '80px'}}>
                
                {/* Page Header */}
                <header className="text-center mb-5">
                    <h1 className="display-3 fw-bold lora-font">Dive Deeper into</h1>
                    <h1 className="display-3 fw-bold lora-font" style={{ color: '#a5b4fc' }}>Space Biology Data.</h1>
                </header>

                {/* Main Search */}
                <div className="row justify-content-center mb-5">
                    <div className="col-lg-8">
                         <div className="input-group">
                            <span className="input-group-text bg-transparent border-end-0" style={{ borderColor: 'rgba(50, 50, 50, 0.5)' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search text-white-50" viewBox="0 0 16 16">
                                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                                </svg>
                            </span>
                            <input type="text" className="form-control form-control-lg form-control-dark border-start-0" placeholder="Ask a question about space biology..." />
                        </div>
                    </div>
                </div>

                {/* Grid Layout */}
                <div className="row g-5">
                    
                    {/* Left Column: Paper Directory */}
                    <div className="col-lg-4">
                        <div className="card-custom p-4 h-100">
                            <h4 className="fw-bold">Research Paper Directory</h4>
                            <p className="small text-white-50">Browse through our collection of academic papers.</p>
                            <div className="input-group mb-4">
                                 <input type="text" className="form-control form-control-dark" placeholder="Search for papers by keyword..." />
                            </div>
                            <div id="paper-directory" style={{ maxHeight: '400px', overflowY: 'auto' }}>
                                {researchPapers.map((paper, index) => (
                                    <div className="paper-entry" key={index}>
                                        <p className="small text-primary mb-1" style={{ color: '#a5b4fc' }}>{paper.date}</p>
                                        <h6 className="text-white fw-normal">{paper.title}</h6>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Main Content Area */}
                    <div className="col-lg-8">
                         <div className="card-custom p-4 h-100">
                            <h5 className="card-title text-white mb-3">DOCUMENT ANALYSIS</h5>
                            <div style={{ height: '250px' }}>
                                <canvas ref={chartRef}></canvas>
                            </div>
                             <div className="row text-center mt-4">
                                <div className="col-md-4">
                                    <div className="p-3 card-custom rounded">
                                        <p className="small text-white-50 mb-1">Key Terms</p>
                                        <p className="h4 text-white">12</p>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                   <div className="p-3 card-custom rounded">
                                        <p className="small text-white-50 mb-1">Sentiment</p>
                                        <p className="h4 text-white">Positive</p>
                                    </div>
                                </div>
                                 <div className="col-md-4">
                                   <div className="p-3 card-custom rounded">
                                        <p className="small text-white-50 mb-1">Entities Found</p>
                                        <p className="h4 text-white">34</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Document Upload Section */}
                <div className="row mt-5">
                    <div className="col-12">
                        <div className="card-custom p-4">
                             <h4 className="fw-bold mb-3 d-flex align-items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-folder-fill me-2" viewBox="0 0 16 16">
                                  <path d="M9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.826a2 2 0 0 1-1.991-1.819l-.637-7a1.99 1.99 0 0 1 .342-1.31L.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3zm-8.322.12C1.72 3.042 1.95 3 2.19 3h5.396l-.707-.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981l.006.139z"/>
                                </svg>
                                Help Me With Your Docs
                            </h4>
                            <div className="dropzone d-flex flex-column justify-content-center align-items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" className="bi bi-cloud-arrow-up-fill text-white-50 mb-3" viewBox="0 0 16 16">
                                  <path d="M8 2a5.53 5.53 0 0 0-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 6.095 0 7.555 0 9.318 0 11.366 1.708 13 3.781 13h8.906C14.502 13 16 11.57 16 9.773c0-1.636-1.242-2.969-2.834-3.194C12.923 3.999 10.69 2 8 2zm2.354 5.146a.5.5 0 0 1-.708.708L8.5 6.707V10.5a.5.5 0 0 1-1 0V6.707L6.354 7.854a.5.5 0 1 1-.708-.708l2-2a.5.5 0 0 1 .708 0l2 2z"/>
                                </svg>
                                <h5 className="text-white">Drop your PDF/Docx here</h5>
                                <p className="text-white-50">or click to browse</p>
                            </div>
                        </div>
                    </div>
                </div>
                </main>
        </>
    );
}

export { Visualize };

