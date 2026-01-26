import { Link } from "react-router";
import classes from "./pagination.module.css";
import { useState } from "react";

export default function Pagination() {
  const [page, setPage] = useState(1);
  function handlePagination(pageNumber) {
    setPage(pageNumber);
  }

  function handleIncrement(increment) {
    if (page === 5) return;
    setPage(page + 1);
  }
  function handleDecrement(decrement) {
    if (page === 1) return;
    setPage(page - 1);
  }
  return (
    <>
      <div
        className={`d-flex gap-3 align-items-center justify-content-center mt-5 ${classes["pagination-container"]}`}
      >
        <Link>
          <button
            className={`${page === 1 ? classes["disabled"] : undefined}`}
            onClick={() => handleDecrement("decrement")}
          >
            <i className="fa-solid fa-angle-right"></i>
          </button>
        </Link>
        <Link>
          <button
            className={`${page === 1 ? classes["active"] : undefined}`}
            onClick={() => handlePagination(1)}
          >
            1
          </button>
        </Link>
        <Link>
          <button
            className={`${page === 2 ? classes["active"] : undefined}`}
            onClick={() => handlePagination(2)}
          >
            2
          </button>
        </Link>
        <Link>
          <button
            className={`${page === 3 ? classes["active"] : undefined}`}
            onClick={() => handlePagination(3)}
          >
            3
          </button>
        </Link>
        <Link>
          <button
            className={`${page === 4 ? classes["active"] : undefined}`}
            onClick={() => handlePagination(4)}
          >
            4
          </button>
        </Link>
        <Link>
          <button
            className={`${page === 5 ? classes["active"] : undefined}`}
            onClick={() => handlePagination(5)}
          >
            5
          </button>
        </Link>
        <Link>
          <button
            className={`${page === 5 ? classes["disabled"] : undefined}`}
            onClick={() => handleIncrement("increment")}
          >
            <i className="fa-solid fa-angle-left"></i>
          </button>
        </Link>
      </div>
      <p className="color-neutral-400 text-center mt-3 lead">
        الصفحة {page} من 5
      </p>
    </>
  );
}
