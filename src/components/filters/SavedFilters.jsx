export default function SavedFiltersList(
  { 
    savedFilters, 
    onApply, 
    loading 
  }) {

  return (
    <div className="saved-filters-list" aria-label="Saved filters">
      <h5 className="sub-title">
        📌 Saved Filters
      </h5>
      {savedFilters.length === 0
        ? <p className="no-filters-text">No saved filters yet.</p>
        : <div 
            className="filters-container"
            role="group"
            aria-label="List of saved filters"
          >
            {savedFilters.map((filter) => (
              <button 
                disabled={loading}
                key={filter.id} 
                className="saved-filter-item" 
                onClick={() => !loading && onApply(filter.values)}
                aria-label={`Apply ${filter.name} filter`}
              >
                  {filter.name}
              </button>
            ))}
          </div>
      } 
    </div>
  );
}