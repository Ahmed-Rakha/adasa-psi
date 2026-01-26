import ArticlesCounter from "./articles-counter/ArticlesCounter";
import ViewToggle from "./view-toggle/ViewToggle";
export default function Header() {
  return (
    <div className="d-flex justify-content-between align-items-center">
      <ArticlesCounter />
      <ViewToggle />
    </div>
  );
}
