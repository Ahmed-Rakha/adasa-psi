import PulseCircle from "../../reusable-cpt/pulse-circle/PulseCircle";

export default function header() {
  return (
    <>
      <div className="container py-5  text-center d-flex flex-column justify-content-center align-items-center gap-4">
        <PulseCircle numOfCircles={1}>
          <span className="ms-1">
            <i className="fa-solid fa-book"></i>
          </span>
          <span>مدونتنا</span>
        </PulseCircle>
        <div className="d-flex gap-2 mt-3">
          <h2 className="text-xxl text-white fw-bold mb-0"> استكشف</h2>
          <h2 className=" text-xxl color-yellow-500 fw-bold mb-0">مقالاتنا</h2>
        </div>
        <p className="lead color-neutral-400 mb-0">
          اكتشف الدروس والرؤى وأفضل الممارسات للتطوير الحديث
        </p>
      </div>
    </>
  );
}
