import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { registerWebMCP } from "./lib/webmcp";

registerWebMCP();

createRoot(document.getElementById("root")!).render(<App />);
