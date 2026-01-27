import ArticlesCounter from "./articles-counter/ArticlesCounter";
import ClearFilters from "./clear-filter/ClearFilters";
import ViewToggle from "./view-toggle/ViewToggle";
export default function Header({
  numOfArticles,
  filterActive,
  clearFilters,
  handleView,
  view,
}) {
  return (
    <div className="d-flex justify-content-between align-items-center mb-5">
      <ArticlesCounter numOfArticles={numOfArticles} />
      <div className="d-flex gap-3 align-items-center">
        <ViewToggle handleView={handleView} view={view} />
        {filterActive && <ClearFilters clearFilters={clearFilters} />}
      </div>
    </div>
  );
}
