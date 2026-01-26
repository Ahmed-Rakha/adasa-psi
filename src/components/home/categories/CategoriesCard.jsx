import React from "react";
import classes from "./categoriesCard.module.css";
import { Link } from "react-router";

export default function CategoriesCard({ name, count, color, iconClass }) {
  return (
    <Link className="col-6 col-md-3">
      <div>
        <div
          className={`inner bg-secondary-color p-4 border-neutral-700 rounded-4 position-relative ${classes["category-card"]}`}
        >
          <span className={`${classes["icon"]} badge-bg-color`}>
            <i className="fa-solid fa-camera text-main-color "></i>
          </span>
          <h5 className="text-white mt-4 text-md">{name}</h5>
          <p className="color-neutral-400 mb-0">{count} مقالة</p>
          <div className={classes["arrow-container"]}>
            <i className="fa-solid fa-angle-left text-white"></i>
          </div>
        </div>
      </div>
    </Link>
  );
}
