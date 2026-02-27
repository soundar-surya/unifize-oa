import { useEffect, useState } from "react";
import { fetchProductCatalog } from "../services/catalogApi";

export default function useProductCatalogData() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(function fetchCatalogData() {
    const controller = new AbortController();
    const signal = controller.signal;
    async function fetchData() {
      try {
        setLoading(true);
        const response = await fetchProductCatalog(signal);
        setProducts(response);
      } catch(err) {
        if (err.name === "AbortError") {
          console.error("Fetch aborted:", err);
        }
        throw err;
      } finally {
        !signal.aborted && setLoading(false);
      }
    }

    fetchData();

    return () => {
      controller.abort();
    };
  }, []);

  return { products, loading };
}