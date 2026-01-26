import PulseCircle from "../../reusable-cpt/pulse-circle/PulseCircle";
import avatar from "../../../assets/images/photo-1492562080023-ab3db95bfbce.jpeg";
import { Link } from "react-router";
import LatestArticlesCard from "./LatestArticlesCard";

export default function LatestArticles({ posts }) {
  const actualDate = new Date().getTime();
  const millisecInDay = 24 * 60 * 60 * 1000;

  // I will extract the latest post in the last 30 days
  const latestPost = posts.filter((post) => {
    const postDate = new Date(post.date).getTime();
    return postDate >= actualDate - 30 * millisecInDay;
  });
  console.log("From latest articles", latestPost);
  return (
    <section id="latest-articles" className="bg-main-color py-5 border-top">
      <div className="container  ">
        <div className="mb-5">
          <PulseCircle numOfCircles={2}>احدث المقالات</PulseCircle>
          <h2 className="text-xxl text-white my-4 fw-bold">احدث المقالات</h2>
          <div className="d-flex gap-3 align-items-center justify-content-between">
            <p className="color-neutral-400">محتوى جديد طازج من المطبعة</p>
            <Link className="d-flex align-items-center gap-2 text-main-color">
              <span>عرض جميع المقالات</span>
              <i className="fa-solid fa-arrow-left-long "></i>{" "}
            </Link>
          </div>
        </div>
        <div className="row g-4">
          {/* Render Cards */}
          {latestPost.map((post, index) => (
            <LatestArticlesCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
