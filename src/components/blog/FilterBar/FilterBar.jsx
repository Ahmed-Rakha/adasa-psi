import React from "react";
import SearchInput from "./search-input/SearchInput";
import CategorySelector from "./category-selector/CategorySelector";

export default function FilterBar({
  categories,
  selectedCategory,
  searchTerm,
  handleSearch,
  handleSelectedCategory,
}) {
  return (
    <div className="container mt-5">
      <div className="row">
        <SearchInput handleSearch={handleSearch} searchTerm={searchTerm} />
        <CategorySelector
          categories={categories}
          selectedCategory={selectedCategory}
          handleSelectedCategory={handleSelectedCategory}
        />
      </div>
    </div>
  );
}
