import React from "react";

import classes from "./Blog.module.css";
import Header from "../components/blog/header/Header";
import FilterBar from "../components/blog/FilterBar/FilterBar";
import { useOutletContext } from "react-router";
import Articles from "../components/blog/articles/Articles";
export default function Blog() {
  const { posts, categories } = useOutletContext();
  return (
    <section id="blog" className={`${classes["blog-section"]} bg-main-color`}>
      <Header />
      <FilterBar categories={categories} />
      <Articles posts={posts} />
    </section>
  );
}
