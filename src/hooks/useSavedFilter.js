import { useState, useEffect } from "react";

const STORAGE_KEY = "saved_filters";

export default function useSavedFilters() {
  const [savedFilters, setSavedFilters] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(function updateLocalStorage() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(savedFilters));
  }, [savedFilters]);

  const addFilter = (name, values) => {
    const newEntry = {
      id: Date.now().toString(),
      name,
      values,
    };
    setSavedFilters((prev) => [...prev, newEntry]);
  };

  return [savedFilters, addFilter];
}