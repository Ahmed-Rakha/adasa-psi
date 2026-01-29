export default function HomeAboutCard({ icon, number, label }) {
  return (
    <div className="mb-3">
      <div className="inner py-3 px-4  rounded-4 shadow-sm main-bg-color border-neutral-600">
        <div>
          <i className={`${icon} text-main-color fs-4`}></i>
        </div>
        <h4 className="mb-0 color-orange-400 fw-bold my-3">{number}</h4>
        <p className="color-neutral-400 mb-0 mt-3">{label}</p>
      </div>
    </div>
  );
}
