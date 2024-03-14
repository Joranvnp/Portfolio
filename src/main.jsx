import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";

import "./index.css";
import "@radix-ui/themes/styles.css";
import "./styles/theme-config.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
