import { useState } from "react";

export default function SaveFilter({ onFilterSave, loading }) {
  const [filterName, setFilterName] = useState("");

  const handleSaveClick = () => {
    if (filterName.trim()) {
      onFilterSave(filterName);
      setFilterName("");
    }
  };

  return (
    <div className="save-filter-container">
        <input
          name="filterName"
          type="text"
          placeholder="Filter name..."
          value={filterName}
          onChange={(e) => setFilterName(e.target.value)}
          disabled={loading}
          className="base-filter save-input"
          aria-label="Enter name for filter"
        />
        <button
          onClick={handleSaveClick}
          disabled={loading}
          className="btn-save"
          aria-label="Save current filter with name"
        >
          📋 Save Filter
        </button>
    </div>
  );
}