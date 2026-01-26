import React from "react";
import UserBadge from "../../reusable-cpt/user-badge/UserBadge";
import classes from "./teamCard.module.css";
import SocialMediaIcon from "../../reusable-cpt/social-media/SocialMediaIcon";

const socialMedia = [
  {
    iconClass: "fa-brands fa-linkedin-in",
    path: "https://www.linkedin.com/",
  },
  {
    iconClass: "fa-brands fa-github",
    path: "https://github.com/",
  },

  {
    iconClass: "fa-brands fa-twitter",
    path: "https://twitter.com/",
  },
];
export default function TeamCard({ post }) {
  return (
    <div className={`col-12 col-md-4 ${classes["team-card"]}`}>
      <div
        className={`${classes["inner"]} d-flex align-items-center gap-3 justify-content-center flex-column border-neutral-700 py-5 rounded-4`}
      >
        <div className="position-relative rounded-circle w-25 ">
          <img
            src={post.author.avatar}
            alt={post.author.name}
            className="rounded-circle border-neutral-700-thick"
          />
          <UserBadge
            iconClass="fa-solid fa-check"
            className={`${classes["avatar-badge"]}`}
          />
        </div>
        <div>
          <h5 className="text-white mt-2">{post.author.name}</h5>
          <p className="text-main-color fw-bold text-center">
            {post.author.role}
          </p>
        </div>
        <div className="d-flex justify-content-center gap-4">
          {socialMedia.map((item, index) => {
            return (
              <SocialMediaIcon
                key={index}
                iconClass={item.iconClass}
                path={item.path}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
