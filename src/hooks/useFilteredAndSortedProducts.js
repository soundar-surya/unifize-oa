import { useMemo } from 'react';

export default function useFilteredAndSortedProducts(
  products,
  query,
  filters,
  sortBy
) {
  return useMemo(() => {
    let result = [...products];

    // Apply search query filter
    if (query.trim()) {
      result = result.filter(({ title }) =>
        title.toLowerCase().includes(query.toLowerCase())
      );
    }    

    // Apply filters
    if (filters) {
      // Category filter
      if (filters.category) {
        result = result.filter(
          ({ category }) => category === filters.category
        );
      }

      // Price range filter
      if (filters.minPrice) {
        result = result.filter(({ price }) => 
          price >= parseFloat(filters.minPrice));
      }
      if (filters.maxPrice) {
        result = result.filter(({ price }) => price <= parseFloat(filters.maxPrice));
      }

      // Rating filter
      if (filters.rating) {
        result = result.filter(({ rating }) => rating >= parseFloat(filters.rating));
      }

      // Stock status filter
      if (filters.stockStatus) {
        const inStock = filters.stockStatus === 'inStock';
        result = result.filter(({ stock }) =>
          inStock ? stock > 0 : stock === 0
        );
      }
    }

    // Apply sorting
    if (sortBy === 'low') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'high') {
      result.sort((a, b) => b.price - a.price);
    }

    return result;
  }, [products, query, filters, sortBy]);
}
