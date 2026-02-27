import { useEffect, useState } from "react";
import { fetchProductCategories } from "../services/catalogApi";

export default function useProductCategories() {
  const [categories, setCategories] = useState([]);

  useEffect(function fetchCategoriesData() {
    const controller = new AbortController();
    const signal = controller.signal;
    async function fetchData() {
      try {
        const response = await fetchProductCategories(signal);
        setCategories(response);
      } catch(err) {
        if (err.name === "AbortError") {
          console.error("Fetch aborted:", err);
        }
        throw err;  
      }
    }
    fetchData();

    return () => {
      controller.abort();
    };
  }, []);

  return { categories };
}