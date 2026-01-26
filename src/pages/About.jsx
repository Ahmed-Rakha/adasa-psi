import PulseCircle from "../components/reusable-cpt/pulse-circle/PulseCircle";
import classes from "./about.module.css";
import Header from "../components/about/header/Header";
import Evaluation from "../components/about/evaluation/Evaluation";
import Team from "../components/about/team/Team";
import { useOutletContext } from "react-router";
import ContactUs from "../components/about/contact-us/ContactUs";

export default function About() {
  const { posts } = useOutletContext();
  console.log("Hello Fro,m About", posts);
  return (
    <>
      <main id="about" className={`bg-main-color ${classes["about-section"]}`}>
        <Header />
        <Evaluation />
        <Team posts={posts} />
        <ContactUs />
      </main>
    </>
  );
}
