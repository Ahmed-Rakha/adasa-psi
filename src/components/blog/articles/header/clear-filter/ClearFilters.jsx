import React from "react";
import classes from "./clearFilters.module.css";
export default function ClearFilters({ clearFilters }) {
  return (
    <button
      className={`${classes["clear-filters-btn"]}`}
      onClick={clearFilters}
    >
      <i className="fa-solid fa-close"></i>
      <span>مسح الفلاتر</span>
    </button>
  );
}
