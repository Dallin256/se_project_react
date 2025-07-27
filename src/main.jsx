import { createRoot } from "react-dom/client";
import "./vendor/normalize.css";
import "./index.css";
import App from "./components/App.jsx";

const root = createRoot(document.getElementById("root"));
root.render(<App></App>);
