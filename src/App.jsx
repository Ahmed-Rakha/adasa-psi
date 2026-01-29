import { createBrowserRouter, RouterProvider } from "react-router";
import RootLayout, { ds_get_adasa_data } from "./layouts/RootLayout";
import About from "./pages/About";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import NotFound404 from "./pages/NotFound404";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    loader: ds_get_adasa_data,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "blog", element: <Blog /> },
      { path: "*", element: <NotFound404 /> },
    ],
  },
]);
createBrowserRouter;

export default function App() {
  return <RouterProvider router={router} />;
}
