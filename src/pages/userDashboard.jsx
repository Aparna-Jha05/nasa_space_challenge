import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import './userDashboard.css';
import Navbar from './Navbar';

const userData = {
    name: "DR. ALEX JOHNSON",
    title: "Research Scientist | Space Biology Division",
    stats: [
        { label: "Papers Viewed", value: 42 },
        { label: "Papers Saved", value: 21 },
        { label: "Projects", value: 7 },
        { label: "Profile Complete", value: "92%" },
    ],
    details: [
        { label: "Member Since", value: "March 2021" },
        { label: "Research Focus", value: "Microgravity Effects" },
        { label: "Last Active", value: "2 Days Ago" },
        { label: "Security Level", value: "Level 4 Clearance" },
    ],
    chartSummary: [
        { label: "Monthly Activity", value: "+12%", color: "text-success" },
        { label: "Time Spent", value: "42h", color: "text-white" }
    ]
};

const activityData = [
    { icon: 'eye', text: 'Viewed paper: "Effects of Microgravity on..."', time: '2 hours ago' },
    { icon: 'bookmark', text: 'Saved paper: "Radiation Shielding in Space Habitats"', time: '1 day ago' },
    { icon: 'plus', text: 'Created new project: "ISS Plant Growth Study"', time: '1 week ago' },
    { icon: 'download', text: 'Downloaded dataset: "Astronaut Physiological Data"', time: '1 week ago' },
    { icon: 'share', text: 'Shared research with Dr. Maria Rodriguez', time: '2 weeks ago' },
];

const icons = {
    eye: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-fill me-3" viewBox="0 0 16 16"><path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/><path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/></svg>`,
    bookmark: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bookmark-fill me-3" viewBox="0 0 16 16"><path d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z"/></svg>`,
    plus: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-circle-fill me-3" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/></svg>`,
    download: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-download me-3" viewBox="0 0 16 16"><path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/><path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/></svg>`,
    share: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-share-fill me-3" viewBox="0 0 16 16"><path d="M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5z"/></svg>`,
};

const UserDashboard = () => {
    const chartContainer = useRef(null);
    const chartInstance = useRef(null);

    useEffect(() => {
        if (chartContainer.current) {
            if (chartInstance.current) {
                chartInstance.current.destroy();
            }

            const ctx = chartContainer.current.getContext('2d');
            chartInstance.current = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                    datasets: [{
                        label: 'Papers Viewed',
                        data: [12, 19, 15, 25, 22, 30, 35, 33, 38, 36, 34, 32],
                        borderColor: '#a5b4fc', tension: 0.4, pointBackgroundColor: '#a5b4fc',
                    },
                    {
                        label: 'Papers Saved',
                        data: [5, 7, 6, 9, 8, 10, 12, 11, 14, 13, 12, 11],
                        borderColor: '#f87171', tension: 0.4, pointBackgroundColor: '#f87171',
                    },
                    {
                        label: 'Projects Created',
                        data: [1, 1, 2, 2, 2, 3, 3, 4, 4, 4, 5, 5],
                        borderColor: '#4ade80', tension: 0.4, pointBackgroundColor: '#4ade80',
                    }]
                },
                options: {
                    responsive: true, maintainAspectRatio: false,
                    scales: {
                        y: { beginAtZero: true, ticks: { color: '#9ca3af' }, grid: { color: 'rgba(107, 114, 128, 0.3)' } },
                        x: { ticks: { color: '#9ca3af' }, grid: { color: 'rgba(107, 114, 128, 0.3)' } }
                    },
                    plugins: { legend: { labels: { color: '#e5e7eb' } } }
                }
            });
        }
        return () => { if (chartInstance.current) chartInstance.current.destroy(); };
    }, []);

    return (
        <>
            <Navbar />
            <main className="container py-5" style={{paddingTop: '80px'}}>
                <header className="dashboard-header text-center text-white mb-5 shadow-lg">
                    <div className="bg-black bg-opacity-50 p-4 rounded-3">
                        <h1 className="display-4 fw-bold">USER DASHBOARD</h1>
                        <p className="lead">Track your research progress, monitor your activity, and access your space biology resources.</p>
                    </div>
                </header>

                <div className="row g-4">
                    <div className="col-lg-4">
                        <div className="card card-custom h-100 shadow p-3">
                            <div className="card-body">
                                <h2 className="h4 text-white">{userData.name}</h2>
                                <p className="small text-white-50 mb-4">{userData.title}</p>
                                <div className="row text-center mb-4">
                                    {userData.stats.map((stat, index) => (
                                        <div key={index} className="col-6 mb-3">
                                            <h3 className="display-5" style={{ color: '#a5b4fc' }}>{stat.value}</h3>
                                            <p className="small text-white-50">{stat.label}</p>
                                        </div>
                                    ))}
                                </div>
                                <hr className="text-secondary" />
                                <ul className="list-unstyled small">
                                    {userData.details.map((detail, index) => (
                                        <li key={index} className="d-flex justify-content-between mb-2 text-white">
                                            <span>{detail.label}:</span>
                                            <span>{detail.value}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-8">
                        <div className="card card-custom shadow">
                            <div className="card-body p-4">
                                <h5 className="card-title text-white">RESEARCH PROGRESS METRICS</h5>
                                <div style={{ height: '250px' }}>
                                    <canvas ref={chartContainer}></canvas>
                                </div>
                                <div className="row text-center mt-3 g-3">
                                    {userData.chartSummary.map((summary, index) => (
                                        <div key={index} className="col-md-6">
                                            <div className="p-3 card-custom rounded">
                                                <p className="small text-white-50 mb-1">{summary.label}</p>
                                                <p className={`h4 ${summary.color}`}>{summary.value}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row g-4 mt-4">
                    <div className="col-12">
                        <div className="card card-custom shadow">
                            <div className="card-body p-4">
                                <h5 className="card-title text-white">RECENT MISSION ACTIVITY</h5>
                                <div className="list-group activity-list mt-3">
                                    {activityData.map((item, index) => (
                                        <a key={index} href="#" className="list-group-item list-group-item-action d-flex align-items-center">
                                            <span dangerouslySetInnerHTML={{ __html: icons[item.icon] }}></span>
                                            <span className="flex-grow-1">{item.text}</span>
                                            <small className="ms-auto text-white-50">{item.time}</small>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export { UserDashboard };
