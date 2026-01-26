import PulseCircle from "../../reusable-cpt/pulse-circle/PulseCircle";
import AdasaMainButton from "../../reusable-cpt/buttons/AdasaMainButton";
import HomeAboutCard from "../../reusable-cpt/cards/HomeAboutCard";
const cardsData = [
  { icon: "fa fa-award", number: "+2مليون", label: "قاري شهريا" },
  { icon: "fa fa-camera", number: "500+", label: "مقالة منشورة" },
  { icon: "fa fa-users", number: "50+", label: "كاتب خبير" },
  { icon: "fa fa-book", number: "15+", label: "تصنيف" },
];
export default function DiscoverSection() {
  return (
    <div className="container py-5  text-center d-flex flex-column justify-content-center align-items-center gap-4">
      <PulseCircle numOfCircles={2}>مرحباً بك في عدسة</PulseCircle>
      <div className="">
        <h2>
          <span className="text-xxl"> اكتشف </span>
          <span className=" text-xxl">فن</span>
        </h2>
        <h2>
          <span className=" text-xxl">التصوير الفوتوغرافي</span>
        </h2>
      </div>
      <p className="lead color-neutral-400">
        انغمس في أسرار المحترفين ونصائح عملية لتطوير مهاراتك في التصوير.
      </p>
      <div className="d-flex gap-3">
        <AdasaMainButton
          borderRadius="30px"
          padding="18px 30px"
          fontSize="18px"
        >
          استكشف المقالات
          <i className="fa-solid fa-arrow-left-long"></i>
        </AdasaMainButton>
        <AdasaMainButton
          borderRadius="30px"
          padding="18px 30px"
          fontSize="18px"
          bgColor="transparent"
          border="1px solid var(--color-neutral-400)"
        >
          <i className="fa-solid fa-circle-exclamation"></i>
          اعرف المزيد
        </AdasaMainButton>
      </div>

      <div className="d-flex gap-3 justify-content-between">
        {cardsData.map((card, index) => (
          <HomeAboutCard key={index} {...card} />
        ))}
      </div>
    </div>
  );
}
