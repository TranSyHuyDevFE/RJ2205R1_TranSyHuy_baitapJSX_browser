import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import reportWebVitals from "./reportWebVitals";

const browser = navigator.userAgent;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<h4>Browser's details: {browser}</h4>);

reportWebVitals();
