export default function HomeAboutCard({ icon, number, label }) {
  return (
    <div className="col-12 col-md-3">
      <div className="inner py-3 px-4  rounded-4 shadow-sm main-bg-color border-neutral-600">
        <div>
          <i className={`${icon} text-main-color fs-4`}></i>
        </div>
        <h3 className="mb-0 color-orange-400 fw-bold my-3">{number}</h3>
        <p className="color-neutral-400 mb-0 ">{label}</p>
      </div>
    </div>
  );
}
