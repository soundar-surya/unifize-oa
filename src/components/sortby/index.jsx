import "./styles.css";

export default function SortBySection(
  { 
    onSortChange,
    visibleItems,
    totalItems,
    loading
  }
){

  return (
    <div className="sort-by-section" aria-label="Sort products by price">
      <p aria-live="polite">
        Showing {visibleItems} of {totalItems} Products
      </p>
      <select 
        onChange={(e) => onSortChange(e.target.value)}
        name="sort"
        className="sort-by-select"
        disabled={loading}
      >
        <option
          selected 
          className="default-select-option"
        >
            Sort By Price
        </option>
        <option value="low" className="sort-option">
          Low to High
        </option>
        <option value="high">High to Low</option>
      </select>
    </div>
  );
}