import { Link } from "react-router";
import classes from "./socialMediaIcon.module.css";
export default function SocialMediaIcon({ iconClass, path }) {
  return (
    <Link
      to={path}
      target="_blank"
      className={`${classes["social-media-hover"]} border-neutral-700 d-inline-flex align-items-center justify-content-center p-2 rounded-3 bg-md-black color-neutral-400`}
    >
      <i className={`${iconClass} `}></i>
    </Link>
  );
}
