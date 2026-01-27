import classes from "./SearchInput.module.css";
export default function SearchInput({ handleSearch, searchTerm }) {
  return (
    <div className="col-12 col-md-4">
      <form action="">
        <div className={`${classes["search-input-form"]} position-relative`}>
          <input
            type="text"
            className="form-control"
            onChange={handleSearch}
            value={searchTerm}
          />
          <span>
            <i className="fa-solid fa-magnifying-glass"></i>
          </span>
        </div>
      </form>
    </div>
  );
}
