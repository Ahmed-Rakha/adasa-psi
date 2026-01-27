import { useEffect, useRef, useState } from "react";
import ArticlesContent from "./articles-content/ArticlesContent";
import Header from "./header/Header";

export default function Articles({ posts, filterActive, clearFilters }) {
  const [view, setView] = useState("grid");
  const [page, setPage] = useState(1);
  const sectionRef = useRef(null);
  function handlePagination(pageNumber) {
    setPage(pageNumber);
  }

  function handleIncrement() {
    if (page === 5) return;
    setPage(page + 1);
  }
  function handleDecrement() {
    if (page === 1) return;
    setPage(page - 1);
  }
  function handleView(viewType) {
    setView(viewType);
  }
  const postsPerPage = 6;
  const startIndex = (page - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;

  posts = posts.slice(startIndex, endIndex);

  useEffect(() => {
    sectionRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, [page]);

  console.log("Hello from Articles", posts);
  return (
    <section id="blog-articles" className="py-5" ref={sectionRef}>
      <Header
        numOfArticles={posts.length}
        filterActive={filterActive}
        clearFilters={clearFilters}
        handleView={handleView}
        view={view}
      />
      <ArticlesContent
        posts={posts}
        view={view}
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
        handlePagination={handlePagination}
        page={page}
      />
    </section>
  );
}
