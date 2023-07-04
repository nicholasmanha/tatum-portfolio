import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  Route,
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom";
import "./index.css";
import Root from "./pages/root";
import Home from "./pages/Home";
import About from "./pages/About";
// import Contact from "./pages/Contact";
import Experience from "./pages/Experience.jsx";
import ScrollToTop from "./ScrollToTop";

const router = createBrowserRouter(
  //   [
  //   {
  //     path: "/",
  //     element: <Root />,

  //     children: [
  //       {
  //         path: "/",
  //         element: <Home />,
  //       },

  //       {
  //         path: "/about",
  //         element: <About />,
  //       },
  //       {
  //         path: "/contact",
  //         element: <Contact />,
  //       },
  //       {
  //         path: "/experience",
  //         element: <Experience />,
  //       },
  //     ],
  //   },
  // ]
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="experience" element={<Experience />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
