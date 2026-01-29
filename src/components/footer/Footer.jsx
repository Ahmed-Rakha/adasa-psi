import { Link } from "react-router";
import AdasaMainButton from "../reusable-cpt/buttons/AdasaMainButton";
import classes from "./footer.module.css";
import SocialMediaIcon from "../reusable-cpt/social-media/SocialMediaIcon";

export default function Footer() {
  return (
    <footer className="bg-main-color border-top py-5">
      <div className="container mb-5">
        <div className="row g-5">
          <div className="col-12 col-md-3">
            <div className="d-flex align-items-center gap-3">
              <p className="bg-orange-500 py-2 px-4 text-white rounded-4 fs-3 fw-bold">
                ع
              </p>
              <h3 className="fw-bold text-white">عدسة</h3>
            </div>
            <p className="color-neutral-400">
              نحن شغوفون بمشاركة المعرفة ومساعدة المصورين على تنمية مهاراتهم من
              خلال محتوى عالي الجودة.
            </p>
            <div className="d-flex gap-3">
              <SocialMediaIcon
                iconClass="fa-brands fa-facebook"
                path="https://www.facebook.com/"
              />
              <SocialMediaIcon
                iconClass="fa-brands fa-twitter"
                path="https://twitter.com/"
              />
              <SocialMediaIcon
                iconClass="fa-brands fa-instagram"
                path="https://www.instagram.com/"
              />
              <SocialMediaIcon
                iconClass="fa-brands fa-linkedin"
                path="https://www.linkedin.com/"
              />
            </div>
          </div>
          <div className="col-12 col-md-3">
            <h4
              className={`${classes["footer-header"]} fw-bold text-white position-relative footer-header`}
            >
              استكشف
            </h4>
            <div
              className={`${classes["display-arrow"]} d-flex flex-column gap-3 `}
            >
              <div className="d-flex align-items-center">
                <i className="fa-solid fa-angle-left "></i>
                <Link className="color-neutral-400 position-relative">
                  الرئيسية
                </Link>
              </div>

              <div>
                <i className="fa-solid fa-angle-left "></i>
                <Link className="color-neutral-400 position-relative">
                  المدونة
                </Link>
              </div>
              <div>
                <i className="fa-solid fa-angle-left "></i>
                <Link className="color-neutral-400 position-relative">
                  من نحن
                </Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-3">
            <h4
              className={`${classes["footer-header"]} fw-bold text-white position-relative `}
            >
              التصنيفات
            </h4>
            <div
              className={`${classes["display-arrow"]} d-flex flex-column gap-3`}
            >
              <div>
                <i className="fa-solid fa-angle-left "></i>
                <Link className="color-neutral-400"> إضاءة</Link>
              </div>
              <div>
                <i className="fa-solid fa-angle-left "></i>
                <Link className="color-neutral-400"> بورتريه</Link>
              </div>
              <div>
                <i className="fa-solid fa-angle-left "></i>
                <Link className="color-neutral-400"> مناظر طبيعية</Link>
              </div>
              <div>
                <i className="fa-solid fa-angle-left "></i>
                <Link className="color-neutral-400"> تقنيات</Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-3">
            <h4
              className={`${classes["footer-header"]} fw-bold text-white  position-relative`}
            >
              ابقى على اطلاع
            </h4>
            <div className="d-flex flex-column gap-3">
              <p className="color-neutral-400">
                اشترك للحصول على أحدث المقالات والتحديثات.
              </p>
              <form action="" className="d-flex flex-column">
                <input
                  type="email"
                  className="form-control mb-3"
                  placeholder="ادخل بريدك الالكتروني"
                />
                <AdasaMainButton borderRadius="30px" padding="18px 30px">
                  اشترك
                </AdasaMainButton>
              </form>
            </div>
          </div>
        </div>
      </div>
      <hr className="border-neutral-600" />
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center mt-5">
        <div>
          <p className="color-neutral-400">
            <span>© 2026 عدسة. صنع بكل</span>
            <span>
              <i className="fa-solid fa-heart text-main-color"></i>
            </span>
            <span>جميع الحقوق محفوظة</span>
          </p>
        </div>
        <div className={classes["footer-policy-condition-links"]}>
          <Link className="color-neutral-400 ms-5">سياسة الخصوصية</Link>
          <Link className="color-neutral-400">شروط الخدمة</Link>
        </div>
      </div>
    </footer>
  );
}
