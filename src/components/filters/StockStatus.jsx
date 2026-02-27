export default function StockFilter(
  { 
    loading, 
    currentStatus, 
    onStatusChange,
    name 
  }) {
  return (
    <div className="stock-filter">
      <label className="filter-label" htmlFor="stockSelect">Stock Status</label>
      <select
        id="stockSelect"
        name={name}
        value={currentStatus}
        onChange={onStatusChange}
        disabled={loading}
        className="base-filter stock-select"
      >
        <option value="">All Products</option>
        <option value="inStock">In Stock</option>
        <option value="outOfStock">Out of Stock</option>
      </select>
    </div>
  );
}