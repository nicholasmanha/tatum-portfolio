import * as React from "react";
import * as ReactDOM from "react-dom/client";
import './index.css'; // Add this line
import {
  BrowserRouter,
} from "react-router-dom";

import App from "./App"
import ScrollToTop from "./ScrollToTop";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
