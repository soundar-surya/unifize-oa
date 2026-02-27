# Product Catalog App

## Deployed Project

- 🔗 **Live Demo:** [unifize-oa.vercel.app](https://unifize-oa.vercel.app)
- 🎥 **Loom Video:** [Watch the demo](https://www.loom.com/share/ce63d4767623401e85639333fe245f24)

## How to Run This Project

1. **Clone the repository** (if not already done):
   ```bash
   git clone <repository-url>
   cd unifize-oa
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```
   The application will be running locally at the URL provided in the terminal (usually `http://localhost:5173`).

## Folder Structure

```
src/
├── App.css
├── App.jsx
├── main.jsx
├── index.css
├── assets/                 # Static assets (svg)
├── components/             # UI Components
│   ├── filters/            # Filtering components 
│   ├── product_catalog/    # Product listing and card components
│   ├── searchbar/          # Search functionality components
│   └── sortby/             # Sorting functionality components
├── hooks/                  # Custom hooks for business logic
│   ├── useDebounce.js
│   ├── useFilteredAndSortedProducts.js
│   ├── useProductCatalogData.js
│   ├── useProductCategories.js
│   └── useSavedFilter.js
└── services/               # API and data services
    ├── catalogApi.js
    └── data/               # Mock data or schemas
```

## Features & Implementation Details

### UI and Styling
I intentionally avoided using any external UI component libraries or CSS frameworks. Instead, I used plain CSS for styling and built custom components using native HTML elements (such as the native `<select>` API). The assignment was quite interesting, so I found it fun and refreshing to write my own CSS and components from scratch after a long time! :)

### Keyboard Navigation
The application supports **full keyboard navigation**, making it fully accessible and usable without a mouse.

### Search Functionality
Based on the provided UI design, there is a dedicated search button next to the search input. To perform a search, you can either:
- Type your search query and **click the search button**.
- Type your search query and **press the `Enter` key**.

### Architecture Note: State Management
For simplicity in this assignment, the `ProductCatalog` component holds the centralized state for filters, products, and the search query. 
- **Current Approach**: The filter state is passed down to the filter components. When any single filter is updated, the entire filter component re-renders. This is an acceptable tradeoff for the scope and complexity of this current scenario.
- **Future Improvements**: This architecture could be optimized by introducing a dedicated state store (like Zustand or Redux). In that enhanced setup, each individual filter component would subscribe only to its specific piece of filter draft state from the store. Consequently, updating one filter would only trigger a re-render for that specific UI component, avoiding unnecessary re-renders of the entire filter section.
