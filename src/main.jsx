import ReactDOM from "react-dom/client";
import React from "react";
import "./vendor/normalize.css";
import "./index.css";
import App from "./components/App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App></App>
  </React.StrictMode>
);

// const root = createRoot(document.getElementById("root"));
// root.render(<App></App>);
