import classes from "./contactUs.module.css";
import AdasaMainButton from "../../reusable-cpt/buttons/AdasaMainButton";
import { Link } from "react-router";
export default function ContactUs() {
  return (
    <section
      id="contact-us"
      className={`py-5 ${classes["contact-us"]} d-flex flex-column align-items-center`}
    >
      <h2>لديك أسئلة؟ دعنا نتحدث!</h2>

      <p className="text-white text-sm text-center text-md-start">
        نحب أن نسمع منك. سواء كان لديك سؤال حول محتوانا، أو تريد المساهمة، أو
        تريد فقط إلقاء التحية، لا تتردد في التواصل.
      </p>
      <div className="d-flex gap-3 flex-column flex-md-row align-items-center">
        <Link to="mailto:O2rYI@example.com">
          <AdasaMainButton
            bgColor="black"
            padding="15px 20px"
            borderRadius="12px"
          >
            <span>
              <i className="fa-regular fa-envelope"></i>
            </span>
            <span>تواصل معنا</span>
          </AdasaMainButton>
        </Link>
        <Link>
          <AdasaMainButton
            bgColor="transparent"
            border="1px solid white"
            padding="15px 20px"
            borderRadius="12px"
          >
            تصفح المقالات
          </AdasaMainButton>
        </Link>
      </div>
    </section>
  );
}
