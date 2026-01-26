import { Outlet, useLoaderData } from "react-router";
import NavBar from "../components/navbar/NavBar";
import Footer from "../components/footer/Footer";

export default function RootLayout() {
  const data = useLoaderData();
  console.log(data);
  const { siteInfo, categories, posts } = data;
  return (
    <div>
      <NavBar siteInfo={siteInfo} />
      <Outlet
        context={{
          categories,
          posts,
        }}
      />
      <Footer />
    </div>
  );
}

export async function ds_get_adasa_data() {
  try {
    const res = await fetch("/data/posts.json");

    if (!res.ok) {
      throw new Response("Failed to fetch posts", { status: res.status });
    }
    return res.json();
  } catch (error) {
    console.log("failed to get data", error);
  }
}
