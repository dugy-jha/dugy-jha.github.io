import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTimes, faArrowRight, faHistory } from '@fortawesome/free-solid-svg-icons';
import './EnhancedSearch.css';

function EnhancedSearch({ placeholder = "Search ASPL Fusion...", className = "" }) {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const [searchHistory, setSearchHistory] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const navigate = useNavigate();
  const inputRef = useRef(null);
  const searchRef = useRef(null);

  // Search suggestions data
  const searchData = [
    { term: 'fusion technology', category: 'Technology', path: '/technology' },
    { term: 'magnetic mirror', category: 'Technology', path: '/technology' },
    { term: 'medical isotopes', category: 'Applications', path: '/applications' },
    { term: 'energy production', category: 'Applications', path: '/applications' },
    { term: 'team members', category: 'Company', path: '/team' },
    { term: 'careers', category: 'Company', path: '/careers' },
    { term: 'news updates', category: 'Company', path: '/news' },
    { term: 'contact information', category: 'Company', path: '/contact' },
    { term: 'mission statement', category: 'Company', path: '/mission' },
    { term: 'roadmap timeline', category: 'Company', path: '/roadmap' },
    { term: 'privacy policy', category: 'Legal', path: '/privacy' },
    { term: 'terms of service', category: 'Legal', path: '/terms' },
    { term: 'frequently asked questions', category: 'Support', path: '/faq' },
    { term: 'about us', category: 'Company', path: '/about' },
    { term: 'case studies', category: 'Company', path: '/casestudies' }
  ];

  // Load search history from localStorage
  useEffect(() => {
    const savedHistory = localStorage.getItem('aspl-search-history');
    if (savedHistory) {
      setSearchHistory(JSON.parse(savedHistory));
    }
  }, []);

  // Handle input change
  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    setSelectedIndex(-1);

    if (value.length > 0) {
      const filtered = searchData.filter(item =>
        item.term.toLowerCase().includes(value.toLowerCase()) ||
        item.category.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filtered.slice(0, 8));
    } else {
      setSuggestions([]);
    }
  };

  // Handle search submission
  const handleSearch = (searchTerm = query) => {
    if (!searchTerm.trim()) return;

    // Add to search history
    const newHistory = [searchTerm, ...searchHistory.filter(item => item !== searchTerm)].slice(0, 5);
    setSearchHistory(newHistory);
    localStorage.setItem('aspl-search-history', JSON.stringify(newHistory));

    // Navigate based on search term
    const matchedSuggestion = searchData.find(item =>
      item.term.toLowerCase() === searchTerm.toLowerCase()
    );

    if (matchedSuggestion) {
      navigate(matchedSuggestion.path);
    } else {
      // Fallback to technology page for general searches
      navigate('/technology');
    }

    // Close search
    setIsOpen(false);
    setQuery('');
    setSuggestions([]);
  };

  // Handle key navigation
  const handleKeyDown = (e) => {
    if (!isOpen) return;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setSelectedIndex(prev => 
          prev < suggestions.length - 1 ? prev + 1 : prev
        );
        break;
      case 'ArrowUp':
        e.preventDefault();
        setSelectedIndex(prev => prev > 0 ? prev - 1 : -1);
        break;
      case 'Enter':
        e.preventDefault();
        if (selectedIndex >= 0 && suggestions[selectedIndex]) {
          handleSearch(suggestions[selectedIndex].term);
        } else {
          handleSearch();
        }
        break;
      case 'Escape':
        setIsOpen(false);
        setQuery('');
        setSuggestions([]);
        setSelectedIndex(-1);
        break;
    }
  };

  // Handle suggestion click
  const handleSuggestionClick = (suggestion) => {
    handleSearch(suggestion.term);
  };

  // Handle history click
  const handleHistoryClick = (historyItem) => {
    setQuery(historyItem);
    handleSearch(historyItem);
  };

  // Clear search history
  const clearHistory = () => {
    setSearchHistory([]);
    localStorage.removeItem('aspl-search-history');
  };

  // Close search when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsOpen(false);
        setSuggestions([]);
        setSelectedIndex(-1);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className={`enhanced-search ${className}`} ref={searchRef}>
      <div className="search-input-container">
        <div className="search-input-wrapper">
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            onFocus={() => setIsOpen(true)}
            placeholder={placeholder}
            className="search-input"
            autoComplete="off"
          />
          {query && (
            <button
              className="clear-button"
              onClick={() => {
                setQuery('');
                setSuggestions([]);
                inputRef.current?.focus();
              }}
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>
          )}
        </div>
        <button
          className="search-button"
          onClick={() => handleSearch()}
          disabled={!query.trim()}
        >
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>

      {isOpen && (
        <div className="search-dropdown">
          {suggestions.length > 0 && (
            <div className="suggestions-section">
              <div className="section-header">Suggestions</div>
              {suggestions.map((suggestion, index) => (
                <div
                  key={index}
                  className={`suggestion-item ${selectedIndex === index ? 'selected' : ''}`}
                  onClick={() => handleSuggestionClick(suggestion)}
                >
                  <div className="suggestion-content">
                    <div className="suggestion-term">{suggestion.term}</div>
                    <div className="suggestion-category">{suggestion.category}</div>
                  </div>
                  <FontAwesomeIcon icon={faArrowRight} className="suggestion-arrow" />
                </div>
              ))}
            </div>
          )}

          {searchHistory.length > 0 && suggestions.length === 0 && (
            <div className="history-section">
              <div className="section-header">
                Recent Searches
                <button className="clear-history" onClick={clearHistory}>
                  Clear
                </button>
              </div>
              {searchHistory.map((historyItem, index) => (
                <div
                  key={index}
                  className="history-item"
                  onClick={() => handleHistoryClick(historyItem)}
                >
                  <FontAwesomeIcon icon={faHistory} className="history-icon" />
                  <span className="history-term">{historyItem}</span>
                </div>
              ))}
            </div>
          )}

          {suggestions.length === 0 && searchHistory.length === 0 && query.length > 0 && (
            <div className="no-results">
              <div className="no-results-text">No suggestions found</div>
              <div className="no-results-subtext">Press Enter to search for "{query}"</div>
            </div>
          )}

          {query.length === 0 && (
            <div className="search-tips">
              <div className="section-header">Search Tips</div>
              <div className="tip-item">Try searching for "fusion technology" or "medical isotopes"</div>
              <div className="tip-item">Use arrow keys to navigate suggestions</div>
              <div className="tip-item">Press Enter to search or Escape to close</div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default EnhancedSearch;
