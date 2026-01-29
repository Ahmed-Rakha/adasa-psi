import React, { useEffect, useState } from "react";

import classes from "./blog.module.css";
import Header from "../components/blog/header/Header";
import FilterBar from "../components/blog/FilterBar/FilterBar";
import { useOutletContext, useSearchParams } from "react-router";
import Articles from "../components/blog/articles/Articles";
export default function Blog() {
  let { posts, categories } = useOutletContext();
  const [selectedCategory, setSelectedCategory] = useState("جميع المقالات");
  const [searchTerm, setSearchTerm] = useState("");
  const [filterActive, setFilterActive] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams.get("category"));
  useEffect(() => {
    const categoryFromUrl = searchParams.get("category");

    setSelectedCategory(categoryFromUrl || "جميع المقالات");
  }, [searchParams]);

  if (selectedCategory === "جميع المقالات") {
    posts.filter(() => true);
  } else if (selectedCategory !== "جميع المقالات") {
    posts = posts.filter((post) => post.category === selectedCategory);
  }
  if (!searchTerm) {
    posts = posts.filter(() => true);
  } else {
    posts =
      posts.filter((post) => post.title.includes(searchTerm)) ||
      posts.filter((post) => post.excerpt.includes(searchTerm));
  }
  function handleSearch(e) {
    setSearchTerm(e.target.value);
    setFilterActive(true);
  }
  function handleSelectedCategory(category) {
    setSelectedCategory(category);
    setFilterActive(true);
  }

  function clearFilters() {
    setSelectedCategory("جميع المقالات");
    setSearchTerm("");
    setFilterActive(false);
  }

  return (
    <section id="blog" className={`${classes["blog-section"]} bg-main-color`}>
      <Header />
      <FilterBar
        categories={categories}
        selectedCategory={selectedCategory}
        handleSearch={handleSearch}
        handleSelectedCategory={handleSelectedCategory}
        searchTerm={searchTerm}
      />
      <Articles
        posts={posts}
        selectedCategory={selectedCategory}
        filterActive={filterActive}
        clearFilters={clearFilters}
      />
    </section>
  );
}
