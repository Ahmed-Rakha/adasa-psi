import { useState } from "react";
import classes from "./categorySelector.module.css";
export default function CategorySelector({ categories }) {
  console.log("Hello from CategorySelector", categories);
  const [selectedCategory, setSelectedCategory] = useState("جميع المقالات");
  const categoriesList = [{ name: "جميع المقالات" }, ...categories];

  function handleActiveBtn(category) {
    setSelectedCategory(category);
  }
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
              onClick={() => handleActiveBtn(item.name)}
            >
              {item.name}
            </button>
          );
        })}
      </div>
    </div>
  );
}
