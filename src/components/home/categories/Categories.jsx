import PulseCircle from "../../reusable-cpt/pulse-circle/PulseCircle";
import CategoriesCard from "./CategoriesCard";

export default function Categories({ categories }) {
  const iconsList = {
    gear: "fa-solid fa-gear",
    user: "fa-solid fa-user",
    landmark: "fa-solid fa-landmark",
    sliders: "fa-solid fa-sliders",
  };
  return (
    <section id="categories" className="py-5 bg-main-color border-top">
      <div className="container">
        <div className="mb-5 d-flex flex-column align-items-center justify-content-center">
          <PulseCircle numOfCircles={2}>التصنيفات</PulseCircle>
          <h2 className="text-xxl text-white my-4 fw-bold">
            استكشف حسب الموضوع
          </h2>
          <p className="color-neutral-400">اعثر على محتوى مصمم حسب اهتماماتك</p>
        </div>
        <div className="row g-3">
          {/* Render Cards */}
          {categories.map((category, index) => {
            const iconClass =
              iconsList[category.iconName] || "fa-solid fa-gear";
            return (
              <CategoriesCard key={index} {...category} iconClass={iconClass} />
            );
          })}
        </div>
      </div>
    </section>
  );
}
