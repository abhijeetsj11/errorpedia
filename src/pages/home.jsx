import { useState } from 'react';
import { Link } from 'react-router-dom';
import { errorData } from '../data/errorData';
import ErrorCard from '../components/errorcard';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredErrors = errorData.filter(error => {
    const matchesSearch = error.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         error.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSearch;
  }).slice(0, 9);

  return (
    <div className="page-container home-page">
      <div className="hero-section">
        <h1>Learn From Common Coding Errors</h1>
        <p className="hero-subtitle">Learn, understand, and fix coding errors with clear explanations and practical solutions.</p>
        
        <div className="search-container">
          <svg className="search-icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M9 17A8 8 0 1 0 9 1a8 8 0 0 0 0 16zM19 19l-4.35-4.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <input
            type="text"
            className="search-input"
            placeholder="Search for an error..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>
      
      <div className="error-count">
        <p>Errors →</p>
      </div>

      <div className="error-grid">
        {filteredErrors.map((error) => (
          <ErrorCard key={error.id} error={error} />
        ))}
      </div>

      <div className="show-more-container">
        <Link to="/categories" className="show-more-button">
          Show All Errors →
        </Link>
      </div>
    </div>
  );
};

export default Home;
