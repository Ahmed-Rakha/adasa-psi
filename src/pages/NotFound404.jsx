import { Link } from "react-router";
import AdasaMainButton from "../components/reusable-cpt/buttons/AdasaMainButton";
import classes from "./notFound404.module.css";
export default function NotFound404() {
  return (
    <div
      className={`bg-main-color py-5 not-found-container ${classes["not-found-container"]}`}
    >
      <div className="container py-5 d-flex flex-column justify-content-center align-items-center gap-4 bg-main-color">
        <h2 className="text-xxl color-orange-400 ">404</h2>
        <div>
          <span className={`${classes["not-found-icon"]}`}>
            <i class="fa-regular fa-face-frown"></i>
          </span>
          <p></p>
          <p></p>
        </div>
        <p className="fw-bold text-white">عفواً! الصفحة غير موجودة</p>
        <p className="color-neutral-400">
          الصفحة التي تبحث عنها غير موجودة أو تم نقلها. دعنا نعيدك إلى المسار
          الصحيح.
        </p>
        <div className="d-flex gap-3">
          <AdasaMainButton borderRadius="50px" padding="20px 25px">
            <i className="fa-solid fa-home"></i>
            <span>الذهاب للرئيسية</span>
          </AdasaMainButton>
          <AdasaMainButton
            bgColor="#292626"
            borderRadius="50px"
            padding="20px 25px"
            border="2px solid #292626"
          >
            <i className="fa-solid fa-book"></i>
            <span>تصفح المقالات</span>
          </AdasaMainButton>
        </div>
        <div>
          <p className="fw-bold color-neutral-400 text-center mt-4">
            قد تجد هذه مفيدة:
          </p>
          <ul className="d-flex gap-3 list-unstyled align-items-center">
            <li className="text-main-color">
              <Link to="/blog" className="text-main-color">
                المدونة
              </Link>
            </li>
            <li className={`${classes["circle"]}`}></li>
            <li className="text-main-color">
              <Link to="/about" className="text-main-color">
                من نحن
              </Link>
            </li>
            <li className={`${classes["circle"]}`}></li>
            <li className="text-main-color">الخصوصية</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
