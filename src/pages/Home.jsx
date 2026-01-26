import { useOutletContext } from "react-router";
import classes from "./home.module.css";
import Footer from "../components/footer/Footer";
import DiscoverSection from "../components/home/discovery-section/DiscoverSection";
import SelectedArticles from "../components/home/selected-articles/SelectedArticles";
import Categories from "../components/home/categories/Categories";
import LatestArticles from "../components/home/latest-articles/LatestArticles";
import Subscribe from "../components/home/subscribe/Subscribe";

export default function Home() {
  const { categories, posts } = useOutletContext();
  return (
    <>
      <main id="home" className={`bg-main-color ${classes["home-section"]}`}>
        <DiscoverSection />
        <SelectedArticles posts={posts} />
        <Categories categories={categories} />
        <LatestArticles posts={posts} />
        <Subscribe />
      </main>
    </>
  );
}
