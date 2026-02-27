import { useState } from 'react';

import useProductCatalogData from '../../hooks/useProductCatalogData';
import useDebounce from "../../hooks/useDebounce";
import useFilteredAndSortedProducts from '../../hooks/useFilteredAndSortedProducts';
import SearchBar from '../searchbar';
import SortBy from "../sortby";
import Filters from '../filters';
import ProductGrid from './ProductGrid';

import "./styles.css";

export function ProductCatalog() {
  const [query, setQuery] = useState("");
  const [currentFilter, setCurrentFilter] = useState(null);
  const [sortBy, setSortBy] = useState("");

  const {products, loading} = useProductCatalogData();
  const debouncedQuery = useDebounce(query, 500);
  const filteredProducts = useFilteredAndSortedProducts(
    products,
    debouncedQuery,
    currentFilter,
    sortBy
  );

  return (
    <div className="product-catalog">
      <SearchBar loading={loading} onQueryChange={setQuery}/>
      <SortBy 
        loading={loading} 
        onSortChange={setSortBy}
        visibleItems={filteredProducts.length}
        totalItems={products.length}
      />
      <Filters loading={loading} applyFilter={setCurrentFilter}/>
      <ProductGrid products={filteredProducts} loading={loading} />
    </div>
  );
}