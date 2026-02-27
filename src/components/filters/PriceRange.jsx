import "./styles.css";

export default function PriceRange(
  {
    loading, 
    minPrice, 
    maxPrice, 
    minPriceName, 
    maxPriceName,
    onPriceChange
  }) {
  return (
    <div className="price-range" >
      <label className="filter-label" htmlFor="minPrice">Price Range</label>
      <div className="price-inputs">
        <input 
          id="minPrice"
          value={minPrice}
          name={minPriceName}
          type="number" 
          placeholder="Min" 
          disabled={loading}
          className="price-input base-filter"
          onChange={onPriceChange}
          aria-label="Minimum price filter"
        />
        <input
          value={maxPrice} 
          name={maxPriceName}
          type="number" 
          placeholder="Max" 
          disabled={loading} 
          className="price-input base-filter"
          onChange={onPriceChange}
          aria-label="Maximum price filter"
        />
      </div>
    </div>
  );
} 