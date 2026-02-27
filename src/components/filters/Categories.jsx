import useProductCategories from "../../hooks/useProductCategories";

export default function Categories(
  { 
    loading, 
    onCategoryChange, 
    category, 
    name 
  }) {
  const { categories } = useProductCategories();

  return (
    <div className="categories">
      <label htmlFor="categories" className="filter-label">Category</label>
      <select
        name={name} 
        id="categories"
        disabled={loading}
        className="base-filter"
        value={category}
        onChange={onCategoryChange}
      >
        <option value="" selected>All Categories</option>
        {categories.map(
          (category) =>
            <option key={category.slug} value={category.slug}>
              {category.name}
            </option>
        )}
      </select>
    </div>
  );
}