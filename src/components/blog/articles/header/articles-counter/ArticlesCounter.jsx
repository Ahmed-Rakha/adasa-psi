import React from "react";

export default function ArticlesCounter({ numOfArticles }) {
  return (
    <h2 className="text-md">
      <span className="color-neutral-400">عرض</span>
      <span className="text-white mx-2">{numOfArticles}</span>
      <span className="color-neutral-400">مقالات</span>
    </h2>
  );
}
