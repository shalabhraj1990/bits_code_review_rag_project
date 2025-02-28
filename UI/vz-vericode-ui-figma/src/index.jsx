import "../tailwind.css";
import "../tailwind.config.js";
import "../global.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Wireframe } from "./screens/Wireframe";

createRoot(document.getElementById("app")).render(
  <StrictMode>
    <Wireframe />
  </StrictMode>,
);
