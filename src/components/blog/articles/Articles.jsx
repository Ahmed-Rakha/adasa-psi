import ArticlesContent from "./articles-content/ArticlesContent";
import Header from "./header/Header";

export default function Articles({ posts }) {
  console.log("Hello from Articles", posts);
  return (
    <section id="blog-articles" className="py-5">
      <Header />
      <ArticlesContent posts={posts} />
    </section>
  );
}
