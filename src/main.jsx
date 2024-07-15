import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  // Route,
  // createBrowserRouter,
  // RouterProvider,
  // createRoutesFromElements,
  BrowserRouter,
} from "react-router-dom";
// import "./index.css";
import App from "./App"
import './index.css';
import ScrollToTop from "./ScrollToTop";
// import Root from "./pages/root";
// import Home from "./pages/Home";
// import About from "./pages/About";
// // import Contact from "./pages/Contact";
// import Experience from "./pages/Experience.jsx";
// import ScrollToTop from "./ScrollToTop";

// const router = createBrowserRouter(
//   //   [
//   //   {
//   //     path: "/",
//   //     element: <Root />,

//   //     children: [
//   //       {
//   //         path: "/",
//   //         element: <Home />,
//   //       },

//   //       {
//   //         path: "/about",
//   //         element: <About />,
//   //       },
//   //       {
//   //         path: "/contact",
//   //         element: <Contact />,
//   //       },
//   //       {
//   //         path: "/experience",
//   //         element: <Experience />,
//   //       },
//   //     ],
//   //   },
//   // ]
  
// );

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
