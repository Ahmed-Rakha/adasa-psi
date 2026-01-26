export default function LatestArticlesCard({ post }) {
  return (
    <div className="col-12 col-md-4">
      <div className="inner border-neutral-700 rounded-5 overflow-hidden">
        <div className="">
          <img src={post.image} alt={post.title} className="" />
        </div>
        <div className="p-4">
          <div className="d-flex gap-3 align-items-center mb-3">
            <span>
              <i className="fa-regular fa-clock color-neutral-400"></i>
            </span>
            <span className="color-neutral-400">{post.readTime}</span>
            <span className="border border-2 rounded-circle bg-neutral-400"></span>
            <span className="color-neutral-400">{post.date}</span>
          </div>
          <h5 className="text-white text-md mb-3">{post.title}</h5>
          <p className="color-neutral-400">{post.excerpt}</p>
          <hr className="color-neutral-400" />
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex gap-3 align-items-center ">
              <div className="rounded-circle overflow-hidden w-25">
                <img src={post.author.avatar} alt={post.author.name} />
              </div>
              <div className="d-flex flex-column">
                <span className="text-white">{post.author.name}</span>
                <span className="color-neutral-400">{post.author.role}</span>
              </div>
            </div>
            <div>
              <span className="badge-bg-color p-2 rounded-circle d-inline-flex align-items-center justify-content-center">
                <i className="fa-solid fa-angle-left text-white"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
