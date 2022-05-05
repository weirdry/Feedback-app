import React from "react";

import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(<App />);

/*
import ReactDOM from "react-dom";
ReactDOM.render(<App />, document.getElementById("root"));
----------------------------------------------------------
Above is an old way to render react.
----------------------------------------------------------
*/
