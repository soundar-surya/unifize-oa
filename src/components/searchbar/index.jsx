import { useState } from "react";
import "./styles.css";

export default function SearchBar({loading, onQueryChange}) {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="search-bar" role="search">
      <input 
        type="text"
        className="search-input"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            onQueryChange(searchQuery);
          }
        }}
        disabled={loading}
        name="search"
        placeholder="Search products..."
        aria-label="Search products by title"
      />
      <button
        className="search-button"
        type="button" 
        disabled={loading} 
        onClick={() => onQueryChange(searchQuery)}
        aria-label="click to search"
      >
        🔎 Search
      </button>
    </div>
  );
}