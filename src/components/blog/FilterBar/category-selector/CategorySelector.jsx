// import { useState } from "react";
import classes from "./categorySelector.module.css";
export default function CategorySelector({
  categories,
  selectedCategory,
  handleSelectedCategory,
}) {
  console.log("Hello from CategorySelector", categories);

  const categoriesList = [{ name: "جميع المقالات" }, ...categories];

  return (
    <div className="col-12 col-md-8">
      <div
        className={`${classes["categories-bar"]} d-flex flex-wrap justify-content-end gap-3 align-items-center h-100`}
      >
        {categoriesList.map((item, index) => {
          return (
            <button
              key={index}
              className={
                selectedCategory === item.name
                  ? `${classes["active"]} `
                  : undefined
              }
              onClick={() => handleSelectedCategory(item.name)}
            >
              {item.name}
            </button>
          );
        })}
      </div>
    </div>
  );
}
