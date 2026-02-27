export default function FilterActions({ onApply, onClear, loading }) {
  return (
    <div className="filter-actions" role="group" aria-label="Filter actions">
      <button 
        className="btn-apply" 
        onClick={onApply} 
        disabled={loading}
        aria-label="Apply selected filters"
      >
        Apply Filters
      </button>
      <button 
        className="btn-clear" 
        onClick={onClear} 
        disabled={loading}
        aria-label="Clear all filters"
      >
        Clear
      </button>
    </div>
  );
}