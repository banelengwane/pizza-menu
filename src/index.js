import React from "react";
import * as ReactDOM from "react-dom/client";

function App() {
  return <h1>Hello React!</h1>;
}

// react v18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
