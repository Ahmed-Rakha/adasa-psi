import PulseCircle from "../../reusable-cpt/pulse-circle/PulseCircle";

export default function Header() {
  return (
    <div className="d-flex justify-content-center flex-column align-items-center">
      <PulseCircle>فريقنا</PulseCircle>
      <h2 className="text-xxl text-white mt-4">تعرف على كتابنا</h2>
      <p className="color-neutral-400">
        فريقنا من المصورين والكتاب ذوي الخبرة شغوفون بمشاركة معرفتهم مع المجتمع.
      </p>
    </div>
  );
}
