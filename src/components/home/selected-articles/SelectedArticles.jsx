import { Link } from "react-router";
import PulseCircle from "../../reusable-cpt/pulse-circle/PulseCircle";
import AdasaMainButton from "../../reusable-cpt/buttons/AdasaMainButton";
import SelectedArticlesCard from "./SelectedArticlesCard";
export default function SelectedArticles({ posts }) {
  return (
    <>
      <section id="selected-articles" className="bg-main-color py-5 border-top">
        <div className="container">
          <div>
            <PulseCircle>مميز</PulseCircle>
          </div>
          <h2 className="text-xxl text-white mt-4">مقالات مختارة</h2>
          <div className="d-flex justify-content-between align-items-center">
            <p className="lead color-neutral-400">
              محتوى منتقى لبدء رحلة تعلمك
            </p>
            <AdasaMainButton markup={Link} path="blog">
              <span>عرض الكل</span>

              <i className="fa-solid fa-angle-left"></i>
            </AdasaMainButton>
          </div>
          <div className="row mt-5">
            {/* repeated cards */}
            {posts.slice(0, 3).map((post) => (
              <SelectedArticlesCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
