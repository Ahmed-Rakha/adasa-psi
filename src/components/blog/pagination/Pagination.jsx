import { Link } from "react-router";
import classes from "./pagination.module.css";

export default function Pagination() {
  return (
    <>
      <div
        className={`d-flex gap-3 align-items-center justify-content-center mt-5 ${classes["pagination-container"]}`}
      >
        <Link>
          <button className={`${classes["disabled"]}`}>
            <i className="fa-solid fa-angle-right"></i>
          </button>
        </Link>
        <Link>
          <button className={`${classes["active"]}`}>1</button>
        </Link>
        <Link>
          <button>2</button>
        </Link>
        <Link>
          <button>3</button>
        </Link>
        <Link>
          <button>4</button>
        </Link>
        <Link>
          <button>5</button>
        </Link>
        <Link>
          <button>
            <i className="fa-solid fa-angle-left"></i>
          </button>
        </Link>
      </div>
      <p className="color-neutral-400 text-center mt-3 lead">الصفحة 1 من 5</p>
    </>
  );
}
