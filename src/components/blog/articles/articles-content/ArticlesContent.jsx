import { useState } from "react";
import LatestArticlesCard from "../../../home/latest-articles/LatestArticlesCard";
import Pagination from "../../pagination/Pagination";
import NoArticlulesFound from "./NoArticlulesFound";

export default function ArticlesContent({
  posts,
  view,
  page,
  handlePagination,
  handleIncrement,
  handleDecrement,
}) {
  return (
    <>
      {posts.length === 0 ? (
        <NoArticlulesFound />
      ) : (
        <>
          <div className="row g-4">
            {/* Render Cards */}
            {posts.map((post) => (
              <LatestArticlesCard key={post.id} post={post} view={view} />
            ))}
          </div>
          <Pagination
            handlePagination={handlePagination}
            handleIncrement={handleIncrement}
            handleDecrement={handleDecrement}
            page={page}
          />
        </>
      )}
    </>
  );
}
