import React from "react";

export default function UserBadge({ iconClass, className }) {
  return (
    <span className={`${className}`}>
      <i className={`${iconClass}`}></i>
    </span>
  );
}
