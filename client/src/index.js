import React from "react";
import "./styles.css";
import App from "./App";
import { ContextProvider } from "./AppContext";

import { createRoot } from "react-dom/client";
const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <ContextProvider>
    <App tab="home" />
  </ContextProvider>
);
