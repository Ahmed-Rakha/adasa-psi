import HomeAboutCard from "../../reusable-cpt/cards/HomeAboutCard";
import PulseCircle from "../../reusable-cpt/pulse-circle/PulseCircle";

export default function Header() {
  const cardsData = [
    { icon: "fa fa-award", number: "+2مليون", label: "قاري شهريا" },
    { icon: "fa fa-camera", number: "500+", label: "مقالة منشورة" },
    { icon: "fa fa-users", number: "50+", label: "كاتب خبير" },
    { icon: "fa fa-book", number: "15+", label: "تصنيف" },
  ];
  return (
    <div className="container py-5  text-center d-flex flex-column justify-content-center align-items-center gap-4">
      <PulseCircle numOfCircles={2}>من نحن </PulseCircle>
      <div className="d-flex gap-2">
        <h2 className="text-xxl">مهمتنا هي </h2>
        <h2 className=" text-xxl">الاعلام والالهام</h2>
      </div>
      <p className="lead color-neutral-400">
        مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار المحترفين
        ونصائح عملية لتطوير مهاراتكم. نحن شغوفون بمشاركة المعرفة ومساعدة
        المصورين على تنمية مهاراتهم من خلال محتوى عالي الجودة.
      </p>
      <div className="row">
        {cardsData.map((card, index) => (
          <HomeAboutCard key={index} {...card} />
        ))}
      </div>
    </div>
  );
}
