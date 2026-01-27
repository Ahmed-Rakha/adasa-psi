import { Link } from "react-router";
import BadgeStar from "../../reusable-cpt/badges/BadgeStar";
import classes from "./selectedArticlesCard.module.css";
import UserBadge from "../../reusable-cpt/user-badge/UserBadge";
export default function SelectedArticlesCard({ post }) {
  return (
    <>
      <Link
        to={{
          pathname: "blog",
          hash: "#blog-articles",
        }}
        className="col-12 col-md-6 p-0 position-relative  border-neutral-700  mb-5"
      >
        <div className="h-100 overflow-hidden">
          <img src={post.image} className="" alt={post.title} />
          {post.featured && (
            <BadgeStar iconClass="fa-solid fa-star"></BadgeStar>
          )}
        </div>
      </Link>
      <Link
        to={{
          pathname: "blog",
          hash: "#blog-articles",
        }}
        className="col-12 col-md-6 bg-main-color p-5 border-neutral-700 mb-5"
      >
        <div>
          <div className="d-flex gap-3 align-items-center">
            <span className="rounded-pill py-1 px-4 text-main-color fw-bold text-sm badge-bg-color border-orange-400">
              {post.category}
            </span>
            <p className="d-flex gap-2 align-items-center color-neutral-400 mb-0">
              <i className="fa-regular fa-clock"></i>
              <span> {post.readTime}</span>
            </p>
          </div>
          <h3 className="mt-3 text-white">{post.title}</h3>
          <p className="color-neutral-400 my-3">{post.excerpt}</p>
          <div className="d-flex gap-3 align-items-center justify-content-between mt-5">
            <div className="d-flex gap-3 align-items-center mt-5">
              <div className="avatar-container rounded-circle  w-25 position-relative">
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="rounded-circle"
                />
                <UserBadge
                  iconClass="fa-solid fa-circle"
                  className={classes["avatar-badge"]}
                />
              </div>
              <div>
                <h4 className="text-white text-md mb-0">{post.author.name}</h4>
                <p className="color-neutral-400 mb-0">{post.date}</p>
              </div>
            </div>
            <div className="mt-5">
              <span className="text-main-color d-flex align-items-center gap-2">
                <span> اقرا المقال</span>
                <i className="fa-solid fa-arrow-left-long"></i>
              </span>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}
