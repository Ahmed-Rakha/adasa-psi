import HomeAboutCard from "../../reusable-cpt/cards/HomeAboutCard";

export default function Evaluation() {
  const cardsData = [
    {
      icon: "fa-solid fa-bullseye",
      number: "الجودة أولاً",
      label: "محتوى مدروس ومكتوب بخبرة",
    },
    {
      icon: "fa-solid fa-bolt",
      number: "تركيز عملي",
      label: "أمثلة واقعية يمكنك تطبيقها اليوم",
    },
    {
      icon: "fa-solid fa-handshake",
      number: "المجتمع",
      label: "تعلم مع آلاف المصورين",
    },
    {
      icon: "fa-solid fa-arrows-rotate",
      number: "دائماً محدث",
      label: "أحدث الاتجاهات وأفضل الممارسات",
    },
  ];
  return (
    <section id="evaluation" className="bg-main-color py-5">
      <div className="container">
        <div className="d-flex gap-3 justify-content-center">
          <span className="rounded thick-border-color-orange-500"></span>
          <h2 className="text-center text-white d-inline-block py-0 px-3 ">
            قيمنا
          </h2>
          <span className="rounded thick-border-color-orange-500"></span>
        </div>

        <p className="color-neutral-400 text-center mt-4">
          المبادئ التي توجه كل ما نقوم بإنشائه
        </p>
        <div className="row g-4 mt-5">
          {cardsData.map((card, index) => (
            <HomeAboutCard
              key={index}
              icon={card.icon}
              number={card.number}
              label={card.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
