import { useState } from 'react';
import { errorData, categories } from '../data/errorData';
import ErrorCard from '../components/errorcard';

const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedLevel, setSelectedLevel] = useState('All');

  const filteredErrors = errorData.filter(error => {
    const matchesCategory = selectedCategory === 'All' || error.category === selectedCategory;
    const matchesLevel = selectedLevel === 'All' || error.level === selectedLevel;
    return matchesCategory && matchesLevel;
  });

  return (
    <div className="page-container categories-page">
      <h1>Browse Errors by Category</h1>
      <p>Explore error solutions organized by technology and topic.</p>
      
      <div className="category-filter">
        <button
          className={selectedCategory === 'All' ? 'active' : ''}
          onClick={() => setSelectedCategory('All')}
        >
          All
        </button>
        {categories.map((category) => (
          <button
            key={category}
            className={selectedCategory === category ? 'active' : ''}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="level-filter">
        {['All', 'Beginner', 'Intermediate', 'Advanced'].map((level) => (
          <button
            key={level}
            className={selectedLevel === level ? 'active' : ''}
            onClick={() => setSelectedLevel(level)}
          >
            {level}
          </button>
        ))}
      </div>

      <div className="error-grid">
        {filteredErrors.length > 0 ? (
          filteredErrors.map((error) => (
            <ErrorCard key={error.id} error={error} />
          ))
        ) : (
          <p className="no-results">No errors found in this category.</p>
        )}
      </div>
    </div>
  );
};

export default Categories;
