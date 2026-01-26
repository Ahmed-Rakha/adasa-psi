import React from "react";
import SearchInput from "./search-input/SearchInput";
import CategorySelector from "./category-selector/CategorySelector";

export default function FilterBar({ categories, posts }) {
  return (
    <div className="container mt-5">
      <div className="row">
        <SearchInput />
        <CategorySelector categories={categories} />
      </div>
    </div>
  );
}
