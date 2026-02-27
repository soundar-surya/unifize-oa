export default function RatingFilter(
  { 
    loading, 
    rating, 
    onRatingChange, 
    name 
  }) {
  const ratingOptions = [1, 2, 3, 4];

  return (
    <div className="rating-filter">
      <label className="filter-label" htmlFor="rating-">Minimum Rating</label>
      <select
        id="rating"
        name={name}
        value={rating}
        onChange={onRatingChange}
        disabled={loading}
        className="base-filter rating-select"
      >
        <option value="">Any Rating</option>
        {ratingOptions.map((num) => (
          <option key={num} value={num}>
            {num} Stars & Up
          </option>
        ))}
      </select>
    </div>
  );
}