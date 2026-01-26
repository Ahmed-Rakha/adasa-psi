import React from "react";
import AdasaMainButton from "../../reusable-cpt/buttons/AdasaMainButton";

export default function Subscribe() {
  return (
    <section id="subscribe" className="bg-main-color py-5 border-top">
      <div className="container py-5 d-flex flex-column align-items-center">
        <form
          action=""
          className="border-neutral-600 rounded-5 p-5 text-center"
        >
          <div className="d-flex justify-content-center mb-5">
            <div className="d-inline-block p-3 rounded-4 bg-orange-500">
              <i className="fa-solid fa-envelope text-white fs-2 "></i>
            </div>
          </div>

          <h2 className="text-xxl fw-bold mb-4">
            <span className="text-white">اشترك في </span>
            <span className="color-orange-400"> نشرتنا الإخبارية</span>
          </h2>
          <p className="color-neutral-400 mb-5">
            احصل على نصائح التصوير الحصرية ودروس جديدة مباشرة في بريدك
            الإلكتروني
          </p>
          <div className="d-flex justify-content-center gap-3 mb-5">
            <input
              type="text"
              placeholder="أدخل بريدك الإلكتروني"
              className="p-3 w-50 bg-md-black  border-0 color-neutral-400 rounded-4"
            />
            <AdasaMainButton padding="18px 40px" fontSize="20px">
              اشترك الآن
            </AdasaMainButton>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <div></div>
            <p>
              <span className="color-neutral-400">انضم لـ</span>
              <span className="text-white">&nbsp;</span>
              <span className="text-white">+10,000</span>
              <span>&nbsp;</span>
              <span className="color-neutral-400">مصور</span>
            </p>
            <p className="color-neutral-400">بدون إزعاج</p>
            <p className="color-neutral-400">إلغاء الاشتراك في أي وقت</p>
          </div>
        </form>
      </div>
    </section>
  );
}
