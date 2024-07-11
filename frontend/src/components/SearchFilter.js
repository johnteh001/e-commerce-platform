import React, { useState } from 'react';

const SearchFilter = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const searchHandler = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <div className="search-filter">
      <form onSubmit={searchHandler}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search products..."
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchFilter;
