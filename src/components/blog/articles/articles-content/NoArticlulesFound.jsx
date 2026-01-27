import classes from "./noArticlesFound.module.css";
export default function NoArticlulesFound() {
  return (
    <div
      className={`d-flex flex-column align-items-center justify-content-center ${classes["no-articles-found"]}`}
    >
      <div className={classes["no-articles-found-icon"]}>
        <i class="fa-regular fa-face-frown"></i>
      </div>
      <h4 className="fw-bold text-white">لا توجد مقالات</h4>
      <p className="color-neutral-400">
        حاول تعديل البحث أو الفلتر للعثور على ما تبحث عنه.
      </p>
      <button>
        <i className="fa-solid fa-arrows-rotate"></i>
        <span>إعادة تعيين الفلاتر</span>
      </button>
    </div>
  );
}
