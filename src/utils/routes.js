import { useRoutes } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import NotFound from "../pages/NotFound";
import MainLayout from "../layouts/MainLayout";
import SingleImage from "../pages/SingleImage";
import Pictures from "../pages/Pictures";

export default function Routes() {
  let element = useRoutes([
    {
      element: <MainLayout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/pictures", element: <Pictures /> },
        { path: "/pictures/:photoId", element: <SingleImage /> },
        { path: "/about", element: <About /> },
        { path: "*", element: <NotFound /> },
      ],
    },
  ]);

  return element;
}
