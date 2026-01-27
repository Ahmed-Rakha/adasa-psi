import classes from "./viewToggle.module.css";

export default function ViewToggle({ handleView, view }) {
  return (
    <div className={`d-flex  ${classes["view-container"]}`}>
      <button
        className={` ${view === "grid" ? classes["active"] : undefined}`}
        onClick={() => handleView("grid")}
      >
        <i className="fa-solid fa-grip"></i>
      </button>
      <button
        className={` ${view === "list" ? classes["active"] : undefined}`}
        onClick={() => handleView("list")}
      >
        <i className="fa-solid fa-list"></i>
      </button>
    </div>
  );
}
