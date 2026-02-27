import products from "./data/products.json";
import categories from "./data/categories.json";

export const fetchProductCatalog = (signal) => {
  return new Promise((res, rej) => {
    const timeoutId = setTimeout(() => res(products.products), 2000);

    // abort promise if signal is aborted in strict mode.
    signal.addEventListener("abort", () => {
      clearTimeout(timeoutId);
      rej(new DOMException("Aborted", "AbortError"));
    });
  });
};

export const fetchProductCategories = (signal) => {
  return new Promise((res, rej) => {
    const timeoutId = setTimeout(() => res(categories.category), 2000);

    // abort promise if signal is aborted in strict mode.
    signal.addEventListener("abort", () => {
      clearTimeout(timeoutId);
      rej(new DOMException("Aborted", "AbortError"));
    });
  });
};