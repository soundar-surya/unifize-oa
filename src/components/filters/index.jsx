import { useState } from "react";
import Categories from "./Categories";
import PriceRange from "./PriceRange";
import RatingFilter from "./Ratings";
import StockStatus from "./StockStatus";
import FilterActions from "./FilterActions";
import SaveFilter from "./SaveFilter";
import SavedFiltersList from "./SavedFilters";
import useSavedFilters from "../../hooks/useSavedFilter";

import "./styles.css";

const INITIAL_STATE = {
  category: "",
  minPrice: "",
  maxPrice: "",
  rating: "",
  stockStatus: ""
};

export default function Filters({loading, applyFilter}) {
  const [filter, setFilter] = useState(INITIAL_STATE);
  const [savedFilters, addFilter] = useSavedFilters();

  const handleSelectChange = (e) => {
    setFilter((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleApplyFilters = () => {
    applyFilter(filter);
  }

  const handleClearFilters = () => {
    setFilter({...INITIAL_STATE});
    applyFilter(null);
  }

  const handleFilterSave = (name) => {
    const isInvalid = Object.values(filter).every(value => value === "");
    if (!isInvalid) {
      addFilter(name, filter);
    }
  };

  const handleSavedFilterClick = (values) => {
    setFilter(values);
    applyFilter(values);
  }
  
  return (
    <aside
      className="filters"
      aria-label="Product filters"
    >
      <h3 className="filters-title">🎯 Filters</h3>
      <Categories 
        loading={loading} 
        onCategoryChange={handleSelectChange}
        category={filter.category}
        name="category"
      />
      <PriceRange 
        loading={loading} 
        minPrice={filter.minPrice}
        maxPrice={filter.maxPrice}
        minPriceName="minPrice"
        maxPriceName="maxPrice"
        onPriceChange={handleSelectChange}
      />
      <RatingFilter 
        loading={loading} 
        rating={filter.rating}
        onRatingChange={handleSelectChange}
        name="rating"
      />
      <StockStatus
        loading={loading}
        currentStatus={filter.stockStatus}
        onStatusChange={handleSelectChange}
        name="stockStatus"
      />
      <FilterActions
        loading={loading} 
        onApply={handleApplyFilters}
        onClear={handleClearFilters}
      />
      <SaveFilter loading={loading} onFilterSave={handleFilterSave}/>
      <div className="divider" />
      <SavedFiltersList
        savedFilters={savedFilters} 
        onApply={handleSavedFilterClick}
        loading={loading}
      />
    </aside>
  );
}