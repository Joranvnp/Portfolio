import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";

import "./index.css";

// Import the global styles
import "@radix-ui/themes/styles.css";

// Import the theme configuration
// import "./styles/theme-config.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
