import LatestArticlesCard from "../../../home/latest-articles/LatestArticlesCard";
import Pagination from "../../pagination/Pagination";

export default function ArticlesContent({ posts }) {
  console.log("Hello from Articles content", posts);

  return (
    <>
      <div className="row g-4">
        {/* Render Cards */}
        {posts.map((post) => (
          <LatestArticlesCard key={post.id} post={post} />
        ))}
      </div>
      <Pagination />
    </>
  );
}
