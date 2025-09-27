import React, { useState, useEffect } from 'react';
import './resource.css';
import Navbar from './Navbar';

const singleBlock = `Mice in Bion-M 1 space mission: training and selection,https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4136787/
"Microgravity induces pelvic bone loss through osteoclastic activity, osteocytic osteolysis, and osteoblastic cell cycle inhibition by CDKN1a/p21",https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3630201/
Stem Cell Health and Tissue Regeneration in Microgravity,https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11988870/
Microgravity Reduces the Differentiation and Regenerative Potential of Embryonic Stem Cells,https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7998608/
Microgravity validation of a novel system for RNA isolation and multiplex quantitative real time PCR analysis of gene expression on the International Space Station,https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5587110/
Spaceflight Modulates the Expression of Key Oxidative Stress and Cell Cycle Related Genes in Heart,https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8396460/
Dose- and Ion-Dependent Effects in the Oxidative Stress Response to Space-Like Radiation Exposure in the Skeletal System,https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5666799/
From the bench to exploration medicine: NASA life sciences translational research for human exploration and habitation missions.,https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11520110/
The impact of spaceflight and microgravity on the microbiome: A systematic review.,https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11519728/
"Navigating the cosmic ""SEA"": Spaceflight-associated neuro-ocular syndrome and its implications for future manned space exploration".,https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11516086/
Effects of simulated microgravity on the biological characteristics of human dental pulp stem cells.,https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11514333/
"Combined ""omics"" analyses reveal that spaceflight has a significant impact on the kidneys of male C57BL/6J mice".,https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11508682/
The history of space biology and medicine.,https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11487192/
To boldly go where no microRNAs have gone before: Spaceflight impact on risk for small-for-gestational-age infants.,https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11484870/
Adaptation to space conditions of novel bacterial species isolated from the International Space Station revealed by functional gene annotations and comparative genome analysis.,https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11451251/
Celebrating 30 years of access to NASA space life sciences data.,https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11403809/
Predicting how varying moisture conditions impact the microbiome of dust collected from the International Space Station.,https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11386075/
Spaceflight alters host-gut microbiota interactions.,https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11362537/
Discoveries from human stem cell research in space that are relevant to advancing cellular therapies on Earth.,https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11339457/
Simulated microgravity impairs human NK [natural killer] cell cytotoxic activity against space radiation-relevant leukemic cells.,https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11324864/
Simulated microgravity alters gene regulation linked to immunity and cardiovascular disease.,https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11295353/
`;
const repeatedData = new Array(29).fill(singleBlock).join('');
const csvData = `Title,Link\n${repeatedData}`;

const ResourcePage= () => {
    const [allPapers, setAllPapers] = useState([]);
    const [filteredPapers, setFilteredPapers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');
    const papersPerPage = 10;

    useEffect(() => {
        const loadAndProcessData = () => {
            try {
                const rows = csvData.trim().split('\n').slice(1);
                const startDate = new Date(2010, 0, 1);
                const endDate = new Date();

                const papers = rows.map((row, index) => {
                    if (!row) return null;
                    const lastCommaIndex = row.lastIndexOf(',');
                    if (lastCommaIndex === -1) return null;

                    let title = row.substring(0, lastCommaIndex).trim();
                    const link = row.substring(lastCommaIndex + 1).trim();

                    if (!link.startsWith('http')) return null;

                    if (title.startsWith('"') && title.endsWith('"')) {
                        title = title.substring(1, title.length - 1).replace(/""/g, '"');
                    }

                    const publicationDate = new Date(startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime()));

                    return {
                        id: index + 1,
                        title: title,
                        link: link,
                        date: publicationDate.toLocaleString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
                    };
                }).filter(Boolean);

                setAllPapers(papers);
                setFilteredPapers(papers);
            } catch (error) {
                console.error("Failed to parse paper data:", error);
            }
        };

        loadAndProcessData();
    }, []);
    
    useEffect(() => {
        const lowercasedQuery = searchTerm.toLowerCase().trim();
        const filtered = allPapers.filter(paper => paper.title.toLowerCase().includes(lowercasedQuery));
        setFilteredPapers(filtered);
        setCurrentPage(1);
    }, [searchTerm, allPapers]);

    const totalPages = Math.ceil(filteredPapers.length / papersPerPage) || 1;
    const startIndex = (currentPage - 1) * papersPerPage;
    const endIndex = startIndex + papersPerPage;
    const papersToRender = filteredPapers.slice(startIndex, endIndex);

    const handlePrevPage = () => {
        setCurrentPage(prev => Math.max(prev - 1, 1));
    };

    const handleNextPage = () => {
        setCurrentPage(prev => Math.min(prev + 1, totalPages));
    };

    return (
        <>
            <Navbar />
            <div className="container p-4 p-md-5">
                <div className="row">
                    <div className="col-lg-9 mx-auto">
                        <header className="mb-5 mt-4" style={{paddingTop: '60px'}}>
                            <h1 className="display-5 fw-bold text-white">NASA bioscience publications</h1>
                            <p className="lead text-white mt-2">Browse through our collection of {allPapers.length} academic papers.</p>
                        </header>

                        <div className="input-group mb-4">
                            <input
                                type="text"
                                className="form-control form-control-lg bg-dark text-white border-secondary"
                                placeholder="Search for papers by keyword..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            <span className="input-group-text bg-dark border-secondary">
                                <svg className="w-5 h-5 text-secondary" style={{ height: '1.25rem', width: '1.25rem' }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </span>
                        </div>

                        <main>
                            {papersToRender.length > 0 ? (
                                papersToRender.map(paper => (
                                    <a
                                        key={paper.id}
                                        href={paper.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="paper-item d-block p-4 mb-3 border rounded-3 shadow-lg text-decoration-none"
                                    >
                                        <h2 className="h6 fw-semibold text-white">{paper.date}</h2>
                                        <p className="text-light mt-1 mb-0">{paper.title}</p>
                                    </a>
                                ))
                            ) : (
                                <div className="text-center py-5">
                                    <h3 className="h3 fw-semibold text-white">No Matching Papers Found</h3>
                                    <p className="text-white-50 mt-1">Try searching with different keywords.</p>
                                </div>
                            )}
                        </main>

                        <footer className="mt-5 d-flex align-items-center justify-content-center gap-3">
                            <button onClick={handlePrevPage} disabled={currentPage === 1} className="btn btn-outline-light">Previous</button>
                            <span className="text-light fw-medium">Page {currentPage} of {totalPages}</span>
                            <button onClick={handleNextPage} disabled={currentPage === totalPages} className="btn btn-outline-light">Next</button>
                        </footer>
                    </div>
                </div>
            </div>
        </>
    );
};

export { ResourcePage };
