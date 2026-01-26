import classes from "./badgeStar.module.css";
export default function BadgeStar({ iconClass, children }) {
  return (
    <div
      className={`${classes.badge} rounded-pill py-2 px-3 text-white  d-flex align-items-center`}
    >
      <span>
        <i className={`${iconClass}`}></i>
      </span>
      <span className="me-1">star</span>
    </div>
  );
}
