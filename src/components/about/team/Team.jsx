import PulseCircle from "../../reusable-cpt/pulse-circle/PulseCircle";
import Header from "./Header";
import TeamCard from "./TeamCard";

export default function Team({ posts }) {
  return (
    <section id="team" className="bg-main-color py-5">
      <div className="container">
        <Header />
        <div className="row g-4 mt-5">
          {/* render cards */}

          {posts.map((post) => (
            <TeamCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
